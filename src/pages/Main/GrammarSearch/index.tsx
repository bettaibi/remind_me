import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Table, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { AppState } from '../../../model/app.model';
import { setLatestConjugatedVerb } from '../../../store/actions/conjugation.actions';
import Skeleton from 'react-loading-skeleton';
import * as Yup from 'yup';
import axios from 'axios';

const linguaApi = "https://lt-nlgservice.herokuapp.com/rest/english/conjugate";

const schema = Yup.object().shape({
    query: Yup.string().required('Enter a Verb to get its conjugations').max(25, 'Too much letters!')
});

export const GrammarSearch: React.FC = () => {
    const { data, isLoading, isError, grammarSearch } = useGrammar();
    const initialValue = data? {query: data.conjugated_forms[0]['1']}: {query: ''};

    const submit = (values: any) => {
        grammarSearch(values.query)
    }

    return (
        <div>
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values) => submit(values)}>
                {
                    ({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Control name="query" value={values.query}
                                onChange={handleChange} onBlur={handleBlur} 
                                isInvalid = {touched.query && !!errors.query} 
                                placeholder="Tap a verb and press enter" required 
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
                isLoading && <LoadingPage />
            }
            {
                isError && <Alert className="mt-3" variant="danger">Oops, we could not find the verb that you have been looking for, please check your internet connection and try again.</Alert>
            }
            { data && !isLoading && <>
                <div className="d-flex flex-row bg-light align-items-center justify-content-center flex-wrap border rounded my-3 p-3">
                        {
                            data.conjugated_forms.map((item: any[], index: number) => (
                                <div key={'form'+index} className="mx-2">
                                    <span className="text-secondary">{item[0]}: </span>
                                    <span className="text-secondary fw-600">{item[1]}</span>
                                </div>
                            ))
                        }
                </div>

               <div className="bg-light pt-3 px-3 border rounded">
                <TenseDisplay payload={data.conjugation_tables.indicative} str='Indicative' color='text-success' variant="success" />
                <TenseDisplay payload={data.conjugation_tables.conditional} str='Conditional' color='text-info' variant="info" />
                <TenseDisplay payload={data.conjugation_tables.passive} str='Passive' color='text-danger' variant="danger" />
               </div>

            </>
            }
        </div>
    )
}

interface TenseDisplayProps{
    payload: any[];
    str: string;
    color: string;
    variant: string;
}

const TenseDisplay: React.FC<TenseDisplayProps> = ({payload, str, color, variant}) =>{

    return (
        <React.Fragment>
            <Alert className="p-2 mb-3 mt-0 fw-600" variant={variant}> {str} </Alert>
            <div className="d-grid-2">
                {
                    payload.map((tense: any, i: number)=> (
                        <Table key={str+'con_table'+i} striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>
                                        <span>#</span>
                                    </th>
                                    <th className={'fw-500 pl-2 '+color}>
                                        <span>
                                        {tense.heading}
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            { tense.forms.map((form: string, j: number)=>(
                                        <tr key={str+j}>
                                            <td  className="text-secondary text-capitalize fw-600"
                                            style={{width: '60px'}}>{form[0]}</td>
                                            <td className="pl-2">{form[1]}</td>
                                        </tr>
                                ))}
                            </tbody>
                        </Table>
                    ))
                }
            </div>
        </React.Fragment>
    )
};

const LoadingPage: React.FC = () =>{
    const arr = [12321,9955,77878,22125];

    return(
        <React.Fragment>
            <div className="text-center border rounded mb-3 mt-3 p-3 bg-light">
                <span style={{marginRight: '1rem'}}> <Skeleton /></span>
                <span> <Skeleton /> </span>
            </div>
            <div className="bg-light rounded border px-3 pt-3">
                <Skeleton />
                <div className="d-grid-2 mt-3">
                {
                        arr.map((item: any)=> (
                            <Table key={'con_table'+item} striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>
                                            <Skeleton />
                                        </th>
                                        <th>
                                        <Skeleton />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                { arr.map((n: number, j: number)=>(
                                            <tr key={n+j}>
                                                <td>
                                                <Skeleton />
                                                </td>
                                                <td className="ml-1">
                                                    <Skeleton />
                                                </td>
                                            </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ))
                    }
                </div>
            </div>

        </React.Fragment>
    )
};

const useGrammar = () => {
    const data = useSelector((state: AppState) => state.conjugations);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isError, setIsError ] = useState<boolean>(false);
    const dispatch = useDispatch();

    const conjugate = async (verb: string) => {
        try {
            const res = await axios.get(`${linguaApi}?verb=${verb}`);
            return await res.data;
        }
        catch (err) {
            throw err;
        }
    };

    const grammarSearch = (verb: string) => {
        setIsLoading(true);
        conjugate(verb).then((res)=>{
            if(res.result === 'OK'){
                dispatch(setLatestConjugatedVerb(res));
                setIsLoading(false);
                if (isError) setIsError(false);
            }
            else{
                setIsLoading(false);
                 setIsError(true);
            }
           
        }).catch(err=>{
            setIsLoading(false);
            setIsError(true);
        });
    };

    return {
        data,
        isLoading,
        isError,
        grammarSearch
    }
}