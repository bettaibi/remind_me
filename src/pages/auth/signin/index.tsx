import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Container, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { Dialog, useDialog } from '../../../components/Dialog';
import { RecoverPassword } from '../RecoverPassowrd';

import { useSnackbar } from '../../../components/Snackbar';
import { LoginForm } from '../../../model/app.model';
import useAuth from '../../../firebase/useAuth';

import * as yup from 'yup';

import logo from '../../../assets/img/logo90.png';

const defaultState: LoginForm = {email: '', password: ''};

const schema = yup.object().shape({
    email: yup.string().required('Email Is required').email('Invalid Email'),
    password: yup.string().required('Password is required').min(6, "Password's length should be greater than 6")
    .max(20, 'too much letters')
});

export const Signin: React.FC = () => {
    const history = useHistory();
    const { show, handleClose, handleShow } = useDialog();
    const { Snackbar, showMsg } = useSnackbar();
    const { signInWithEmailAndPassword } = useAuth()

    const navigateTo = (e: any) =>{
        e.preventDefault();
        history.push('/signup')
    };

    const recoverPassword = (e: any) =>{
        e.preventDefault();
        handleShow();
    };

    const login = async (values: LoginForm) => {
       try{
         const res = await signInWithEmailAndPassword(values.email, values.password);
         if(res.success){
            showMsg("User logged In", res.message, "success");
         }
         else{
             showMsg('Failure', 'Failed to logged in', 'danger');
         }
       }
       catch(error){
        throw error;
       }
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">

            <Card style={{minWidth: '300px'}}>
                <Card.Header className="text-center">
                    <img src={logo} alt="App Logo" />
                    <h6 className="fw-400">SIGN IN TO YOUR ACCOUNT</h6>
                </Card.Header>
                <Card.Body>
                    <Formik initialValues={defaultState} validationSchema={schema} onSubmit={(values)=> login(values)}>
                        {
                            ({handleSubmit, handleChange, handleBlur, values, touched, errors, isValid}) => (
                                <Form onSubmit = {handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Enter your email</Form.Label>
                                    <Form.Control placeholder="email" autoComplete="off" name="email"
                                    onChange={handleChange} onBlur={handleBlur} value={values.email}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email}></Form.Control>
                                  { !errors.email && <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>}
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter your password</Form.Label>
                                    <Form.Control placeholder="******" type="password" autoComplete="off" name="password"
                                     onChange={handleChange} onBlur={handleBlur} value={values.password}
                                     isValid={touched.password && !errors.password}
                                     isInvalid={touched.password && !!errors.password}></Form.Control>
                                    <span className="link" onClick={recoverPassword}>
                                        <small>Recover password</small>
                                    </span>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="text-right">
                                    <Button type="submit" variant="primary mr-2" disabled={!isValid}>Login</Button>
                                    <Button variant="outline-primary" onClick={navigateTo}>Create an account!</Button>
                                </div>
                            </Form>
                            )
                        }
                    </Formik>

                    <div className="text-center p-3">
                        <span className="or__separator text-secondary">
                         OR
                        </span>
                    </div>

                    <div className="text-center">
                        <Button variant="danger">Login with Google</Button>
                    </div>
                </Card.Body>
            </Card>
            <Dialog size="sm" show={show} centered={true} handleClose= {handleClose}>
                <RecoverPassword handleClose= {handleClose} />
            </Dialog>
            <Snackbar />
        </Container>
    )
}
