import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required('This Field is required').email('Ivalid Email')
});

const initialValue = { email: ''};

interface RecoverPasswordProps{
    handleClose: () => void;
}

export const RecoverPassword: React.FC<RecoverPasswordProps> = ({handleClose}) => {
    return (
        <React.Fragment>
            <h6>Send Recover link</h6>
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values)=>console.log(values)}>
                {
                    ({handleChange, handleBlur, handleSubmit, touched, errors, values, isValid}) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Enter your email</Form.Label>
                                <Form.Control placeholder="Email.." type="email" name="email" value={values.email} 
                                onChange={handleChange} onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email} />

                                { !errors.email && <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>}

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>

                            </Form.Group>

                            <div className="text-right">
                                <Button variant="secondary mr-2" onClick={handleClose}>Close</Button>
                                <Button type="submit" variant="primary" disabled={!isValid}>Send Reset Link</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    )
}
