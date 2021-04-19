import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Container, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import logo from '../../../assets/img/logo90.png';
import { useSnackbar } from '../../../components/Snackbar';
import { useSharedContext } from '../../../Context';

interface RegisterForm{
    email: string;
    password: string;
    confirmPassword: string;
}

const defaultState: RegisterForm = {email: '', password: '', confirmPassword: ''};
    
const schema = yup.object().shape({
    email: yup.string().required('Email Is required').email('Invalid Email'),
    password: yup.string().required('Password is required').min(6, "Password's length should be greater than 6")
    .max(20, 'too much letters'),
    confirmPassword: yup.string().required('Password confirmation is required').min(6, "Password's length should be greater than 6")
    .max(20, 'too much letters').oneOf([yup.ref('password')], 'Password must much')
});

const Singup: React.FC = () => {
    const history = useHistory();
    const { createUserWithEmailAndPassword } = useSharedContext();
    const { Snackbar, showMsg } = useSnackbar();

    const navigateTo = (e: any) =>{
        e.preventDefault();
        history.push('/signin')
    }

    const createUser = (values: RegisterForm) =>{
        createUserWithEmailAndPassword(values.email, values.password).then((v)=>{
            setTimeout(()=>{
                history.push('/');
            },1000);
        })
        .catch(err => {
            showMsg('Failure', err.message, 'danger');
        });
    }   

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">

            <Card style={{minWidth: '300px'}}>
                <Card.Header className="text-center">
                    <img src={logo} alt="App Logo" />
                    <h6 className="fw-400">SIGN IN TO YOUR ACCOUNT</h6>
                </Card.Header>
                <Card.Body>
                    <Formik initialValues={defaultState} validationSchema={schema} onSubmit={(values)=> createUser(values)}>
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
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Confirm your password</Form.Label>
                                    <Form.Control placeholder="******" type="password" autoComplete="off" name="confirmPassword"
                                     onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}
                                     isValid={touched.confirmPassword && !errors.confirmPassword}
                                     isInvalid={touched.confirmPassword && !!errors.confirmPassword}></Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="text-right">
                                    <Button type="submit" variant="primary mr-2" disabled={!isValid}>Create</Button>
                                    <Button variant="outline-primary" onClick={navigateTo}>Login!</Button>
                                </div>
                            </Form>
                            )
                        }
                    </Formik>
                </Card.Body>
            </Card>
            <Snackbar />
        </Container>
    )
  
}

export default Singup;