import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Alert } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { AppState, WordDefinitionForm, DefinitionForm, MeaningsForm } from '../../../model/app.model';
import { updateDefinition } from '../../../store/actions/definition.actions';
import axios from "axios";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    query: Yup.string().required('Enter a word to get its definition').max(50, 'Too much letters!')
});

const definitionApi = "https://api.dictionaryapi.dev/api/v2/entries/en_GB";


export const WordDefinition: React.FC = () => {
    const { data, getDefinition, isLoading, isError } = useDefinition();
    let initilalValue = data ? { query: data.word } : { query: '' };

    console.log(data);
    console.log(isLoading)
    console.log(isError)

    const submit = (values: any) => {
        getDefinition(values.query);
    }

    return (
        <div>
            <Formik initialValues={initilalValue} validationSchema={schema} onSubmit={(values) => submit(values)}>
                {
                    ({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Control name="query" value={values.query}
                                onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.query && !!errors.query}
                                placeholder="Looking for definition, synonyms or examples?" required
                                type="search" autoComplete="off"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.query}
                            </Form.Control.Feedback>
                        </Form>
                    )
                }
            </Formik>

            {
              isLoading && <div><DefinitionSkeleton /></div>
            }

            {
                isError && <Alert className="mt-3" variant="danger">Oops, we could not find the word that you have been looking for.</Alert>
            }

            {
                data && !isLoading && <DefinitionResult data={data} />
            }


        </div>
    )
}


const useDefinition = () => {
    const data: WordDefinitionForm | null = useSelector((state: AppState) => state.definitions);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const dispatch = useDispatch();

    // Get Definition
    const getDefinition = (word: string) => {
        try {
            setIsLoading(true);
            axios.get(`${definitionApi}/${word}`).then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);
                    dispatch(updateDefinition(res.data[0]));
                    if (isError) setIsError(false);
                }
            }).catch((err) => {
                setIsLoading(false);
                setIsError(true);
            });
        }
        catch (err) {
            throw err;
        }
    };

    return {
        getDefinition,
        data,
        isLoading,
        isError
    };


};

interface DefinitionResultProps {
    data: WordDefinitionForm;
}

const DefinitionResult: React.FC<DefinitionResultProps> = ({ data }) => {

    const spell = (e: any) => {
        try {
            e.preventDefault();
            const audio = new Audio(data.phonetics[0].audio);
            audio.play();
        }
        catch (err) {
            console.info(err.message)
        }
    };

    return (
        <div className="border rounded p-3 my-3">
            <h5>Definitions of {data.word}</h5>
            {data.phonetics && (
                <>
                    <span className="mr-1">{data.phonetics[0].text}</span>
                    <button style={{ border: 'none', outline: 'none' }} className="btn" onClick={spell}><VolumeUp size="24" /></button>
                </>
            )}

            {
                data.meanings.map((item: MeaningsForm, i: number) => (
                    <div key={'mean' + i}>
                        {item.partOfSpeech && <h6 className="text-info text-capitalize">{item.partOfSpeech}</h6>}

                        <div>
                            {
                                item.definitions.map((def: DefinitionForm, index: number) => (
                                    <div className="d-flex flex-row py-1" key={'def' + index}>
                                        <div style={{ minWidth: '50px' }}>
                                            <div style={{ width: '25px', height: '25px' }}
                                                className="bg-secondary text-light rounded-circle text-center d-flex justify-content-center">{index + 1}</div>
                                        </div>
                                        <div className="">
                                            <p className="text-dark m-0">{def.definition}</p>
                                            {def.example && <small className="text-secondary">Example: {def.example}</small>}
                                            <div>
                                                {
                                                    def.synonyms && (
                                                        <>
                                                            <span className="text-secondary">Synonyms: </span>
                                                            <div className="d-flex flex-row flex-wrap">
                                                                {
                                                                    def.synonyms.map((item: string, c: number) => (
                                                                        <span key={'sy' + c} className="border rounded-lg text-secondary py-1 px-2 mr-2 my-1">{item}</span>
                                                                    ))
                                                                }
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                ))
            }
        </div>
    )
};

const DefinitionSkeleton: React.FC = () => {

    return (
        <div className="border rounded p-3 my-3">
            <h5> <Skeleton /></h5>
            <span> <Skeleton /> </span>
            <h6> <Skeleton /></h6>
            <div className="d-flex flex-row py-1 mt-3">
                <div style={{ minWidth: '50px' }}>
                    <div style={{ width: '25px', height: '25px' }}
                        className="bg-secondary rounded-circle d-flex justify-content-center">
                        <Skeleton /> 
                    </div>
                </div>
                
                <div style={{width: '100%'}}>
                     <Skeleton count={2} /> 
                     <div className="d-flex flex-row" style={{width: '100%'}}>
                     <Skeleton  style={{width: '80px', marginRight: '0.5rem'}} count={4} /> 
                    </div>
                </div>
            </div>

            <div className="d-flex flex-row py-1 mt-3">
                <div style={{ minWidth: '50px' }}>
                    <div style={{ width: '25px', height: '25px' }}
                        className="bg-secondary rounded-circle d-flex justify-content-center">
                        <Skeleton /> 
                    </div>
                </div>
                
                <div style={{width: '100%'}}>
                     <Skeleton count={4} /> 
                     <div className="d-flex flex-row mt-2 flex-wrap" style={{width: '100%'}}>
                     <span className="rounded-lg border p-2" style={{width: '100px', margin: '0.5rem 0.5rem 0.5rem 0'}}>
                         <Skeleton />
                     </span>
                     <span className="rounded-lg border p-2" style={{width: '100px',margin: '0.5rem 0.5rem 0.5rem 0'}}>
                         <Skeleton />
                     </span>
                     <span className="rounded-lg border p-2" style={{width: '100px', margin: '0.5rem 0.5rem 0.5rem 0'}}>
                         <Skeleton />
                     </span>
                     <span className="rounded-lg border p-2" style={{width: '100px', margin: '0.5rem 0.5rem 0.5rem 0'}}>
                         <Skeleton />
                     </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
