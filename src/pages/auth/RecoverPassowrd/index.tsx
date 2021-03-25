import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import * as yup from 'yup';
import { useSnackbar } from '../../../components/Snackbar';
import useAuth from '../../../firebase/useAuth';

const schema = yup.object().shape({
    email: yup.string().required('This Field is required').email('Ivalid Email')
});

type RecoverObject = {email: string};

const initialValue: RecoverObject = { email: ''};

interface RecoverPasswordProps{
    handleClose: () => void;
}

export const RecoverPassword: React.FC<RecoverPasswordProps> = ({handleClose}) => {
    const { Snackbar, showMsg } = useSnackbar();
    const { sendPasswordResetEmail } = useAuth();

    const resetPassword = async (values: RecoverObject) =>{
        try{
            const res = await sendPasswordResetEmail(values.email);
            if(res.success){
                showMsg('Check your email', res.message);
            }
            else{
                showMsg("Operation Failed","We Couldn't send you a reset link, please verify your email and try again!", 'danger');
            }
        }
        catch(err){
            throw err;
        }
    }

    return (
        <React.Fragment>
            <h6>Send Recover link</h6>
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values)=> resetPassword(values)}>
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
            <Snackbar />
        </React.Fragment>
    )
}
