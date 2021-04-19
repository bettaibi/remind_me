import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import * as yup from 'yup';
import { useSnackbar } from '../../../components/Snackbar';
import { useSharedContext } from '../../../Context';

const schema = yup.object().shape({
    email: yup.string().required('This Field is required').email('Ivalid Email')
});

type RecoverObject = {email: string};

const initialValue: RecoverObject = { email: ''};

interface RecoverPasswordProps{
    handleClose: () => void;
};

export const RecoverPassword: React.FC<RecoverPasswordProps> = ({handleClose}) => {
    const { Snackbar, showMsg } = useSnackbar();
    const { sendPasswordResetEmail } = useSharedContext();

    const resetPassword = async (values: RecoverObject) =>{
        sendPasswordResetEmail(values.email).then((v)=>{
            showMsg('Check your email', 'A Reset link has been sent to th given email address');
        })
        .catch(err => {
            showMsg("Operation Failed","We Couldn't send you a reset link, please verify your email and try again!", 'warning');
        });
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
                                <Button variant="secondary mr-2" onClick={handleClose} size="sm">Close</Button>
                                <Button type="submit" variant="primary" disabled={!isValid} size="sm">Send Reset Link</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <Snackbar />
        </React.Fragment>
    )
}
