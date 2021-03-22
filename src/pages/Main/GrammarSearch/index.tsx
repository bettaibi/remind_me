import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { v4 } from 'uuid';

const linguaApi = "https://lt-nlgservice.herokuapp.com/rest/english/conjugate";

const schema = Yup.object().shape({
    query: Yup.string().required('Enter a Verb to get its conjugations').max(25, 'Too much letters!')
});

export const GrammarSearch: React.FC = () => {

    const [data, setData] = useState<any>(null);

    const conjugate = async (verb: string) => {
        try {
            const res = await axios.get(`${linguaApi}?verb=${verb}`);
            return await res.data;
        }
        catch (err) {
            throw err;
        }
    };

    const submit = (values: any) => {
        conjugate(values.query).then((res)=>{
            console.log(res)
            if(res.result === 'OK'){
                setData(res)
            }
        });
    }

    return (
        <div>
            <Formik initialValues={{ query: '' }} validationSchema={schema} onSubmit={(values) => submit(values)}>
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
         { data && <>
            <div className="d-flex flex-row align-items-center justify-content-center flex-wrap border rounded mt-3 p-3">
                    {
                        data.conjugated_forms.map((item: any[]) => (
                            <div key={v4()} className="mx-2">
                                <span className="text-secondary">{item[0]}: </span>
                                <span className="text-secondary fw-600">{item[1]}</span>
                            </div>
                        ))
                    }
            </div>
            <div className="bg-secondary rounded p-1 my-3 text-light fw-600"> Indicative </div>
            <div className="d-grid-2">
                {
                    data.conjugation_tables.indicative.map((tense: any)=> (
                        
                        <div className="shadow-sm rounded">
                            <div className="p-2">
                            <div key={v4()} className="text-success text-capitalize fw-600"> {tense.heading}</div>
                            { tense.forms.map((form: string)=>(
                                    <div key={v4()}>
                                        <span className="text-secondary text-capitalize fw-600">{form[0]}: </span>
                                        <span className="ml-1">{form[1]}</span>
                                    </div>
                            ))}
                            </div>
                        </div>
                        
                    ))
                }
            </div>
            <div className="bg-secondary rounded p-1 my-3 text-light fw-600"> Conditional </div>
            <div className="d-grid-2">
                {
                    data.conjugation_tables.conditional.map((tense: any)=> (
                        
                        <div className="shadow-sm rounded">
                            <div className="p-2">
                            <div key={v4()} className="text-danger text-capitalize fw-600"> {tense.heading}</div>
                            { tense.forms.map((form: string)=>(
                                    <div key={v4()}>
                                        <span className="text-secondary text-capitalize fw-600">{form[0]}: </span>
                                        <span className="ml-1">{form[1]}</span>
                                    </div>
                            ))}
                            </div>
                        </div>
                        
                    ))
                }
            </div>

            <div className="bg-secondary rounded p-1 my-3 text-light fw-600"> Passive Form </div>
            <div className="d-grid-2">
                {
                    data.conjugation_tables.passive.map((tense: any)=> (
                        
                        <div className="shadow-sm rounded">
                            <div className="p-2">
                            <div key={v4()} className="text-info text-capitalize fw-600"> {tense.heading}</div>
                            { tense.forms.map((form: string)=>(
                                    <div key={v4()}>
                                        <span className="text-secondary text-capitalize fw-600">{form[0]}: </span>
                                        <span className="ml-1">{form[1]}</span>
                                    </div>
                            ))}
                            </div>
                        </div>
                        
                    ))
                }
            </div>

        </>
        }
        </div>
    )
}

// const useGrammar = (verb: string) => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [isError, setIsError] = useState<boolean>(false);
//     const [conjugationList, setConjugationList] = useState<any[]>([]);

//     useEffect(() => {
//         effect
//         return () => {
//             cleanup
//         }
//     }, [verb])


// };
