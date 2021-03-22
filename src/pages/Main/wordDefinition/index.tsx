import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from "axios";
import { Form } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';

import { v4 } from 'uuid';

const schema = Yup.object().shape({
    query: Yup.string().required('Enter a word to get its definition').max(50, 'Too much letters!')
});

const definitionApi = "https://api.dictionaryapi.dev/api/v2/entries/en_GB";

interface DefinitionForm{
    definition: string;
    example?: string;
    synonyms?: string[];
}

interface MeaningsForm{
    partOfSpeech?: string;
    definitions: DefinitionForm[];
}

interface WordDefinitionForm{
    meanings: MeaningsForm[];
    phonetics: any[];
    word: string;
}

export const WordDefinition: React.FC = () => {
    const [data, setData] = useState<WordDefinitionForm | null>(null);

    // Get Definition
    const getDefinition = async (word: string) => {
        try{
            const res = await axios.get(`${definitionApi}/${word}`);
            return res.data;
        }
        catch(err){
            throw err;
        }
    };

    const submit = (values: any) => {
       getDefinition(values.query).then((res: any)=>{
        console.log(res)
        if(res) setData(res[0])
       }).catch(err =>{
           console.log(err.message)
       });
    }

    const spell = (e: any) =>{
     try{
        e.preventDefault();
        const audio = new Audio(data?.phonetics[0].audio);
        audio.play();
     }
     catch(err){
         console.info(err.message)
     }
    };


    return (
        <div>
            <Formik initialValues={{ query: '' }} validationSchema={schema} onSubmit={(values) => submit(values)}>
                {
                    ({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Control name="query" value={values.query}
                                onChange={handleChange} onBlur={handleBlur} 
                                isInvalid = {touched.query && !!errors.query} 
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
                data && (
                    <div className="border rounded p-3 my-3">
                        <h5>Definitions of {data.word}</h5>
                       {data.phonetics && (
                       <>
                        <span className="mr-1">{data.phonetics[0].text}</span>
                        <button style={{border: 'none', outline:'none'}} className="btn" onClick={spell}><VolumeUp size="24" /></button>
                       </>
                       )}

                        {
                            data.meanings.map((item: MeaningsForm, i: number)=>(
                               <div key={'mean'+i}>
                                {item.partOfSpeech && <h6 className="text-info text-capitalize">{item.partOfSpeech}</h6>}
                                
                                <div>
                                {
                                    item.definitions.map((def: DefinitionForm, index: number)=>(
                                        <div className="d-flex flex-row py-1" key={'def'+index}>
                                            <div style={{minWidth: '50px'}}>
                                                <div  style={{width: '25px', height: '25px'}} 
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
                                                            def.synonyms.map((item: string, c: number)=>(
                                                              <span key={'sy'+c} className="border rounded-lg text-secondary py-1 px-2 mr-2 my-1">{item}</span>
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
            }
        </div>
    )
}
