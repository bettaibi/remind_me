import React from 'react';
import { IdiomsModel } from '../../../../model/app.model';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const INITIAL_VALUE: IdiomsModel = {
    label: '',
    explication: '',
}

const schema = yup.object().shape({
    label: yup.string().required('This field is required'),
    explication: yup.string().required('This field is required'),
})

interface commonProps{
    handleToogle: () => void;
}
export const NewIdiom: React.FC<commonProps> = ({handleToogle}) => {
    
    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => console.log(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>

                            <Form.Group>
                                <Form.Label>
                                    Phrase / Idiom
                                </Form.Label>
                                <Form.Control placeholder="Write something..." autoComplete="off" name="label" size="sm"
                                    onChange={handleChange} onBlur={handleBlur} value={values.label}
                                    isInvalid={touched.label && !!errors.label}
                                ></Form.Control>

                                <Form.Control.Feedback type="invalid">
                                    {errors.label}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Explication / Meaning</Form.Label>
                                <Form.Control as="textarea" placeholder="let me explain" size="sm" autoComplete="off" name="explication"
                                    onChange={handleChange} onBlur={handleBlur} value={values.explication}
                                    isInvalid={touched.explication && !!errors.explication}
                                ></Form.Control>

                                <Form.Control.Feedback type="invalid">
                                    {errors.explication}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-right">
                                <Button  variant="secondary" size="sm" onClick={handleToogle}>Close</Button>
                                <Button  variant="primary" className="ml-2" size="sm" type="submit">Save</Button>
                            </div>
                    </Form>
                )
            }
        </Formik>
    )
}
