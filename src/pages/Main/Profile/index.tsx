import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { AccordionItems, ReusableAccordion } from '../../../components/ReusableAccordion';
import useAuth from '../../../firebase/useAuth';
import { CustomResponse } from '../../../model/app.model';

import * as yup from 'yup';
import { useSnackbar } from '../../../components/Snackbar';

const userProfileSchema = yup.object().shape({
    displayName: yup.string().required('Name is required'),
    photoUrl: yup.string().required('Photo url is required')
});
const userEmailSchema = yup.object().shape({
    newEmail: yup.string().email('Invalid Email').required('Email is required')
});
const PasswordSettingSchema = yup.object().shape({
    password: yup.string().required('Password is required')
    .min(6, 'Password must have at least 6 letters'),
    newPassword: yup.string().required('New Password is required')
    .min(6, 'Password must have at least 6 letters'),
    passwordConfirmation: yup.string().required('The Confirmation is required')
    .min(6, 'Password must have at least 6 letters')
    .oneOf([yup.ref('newPassword')], 'Password must much')
});

const Profile: React.FC = () => {
    const { signOut, updateUserEmail, updateUserPassword, updateUserProfile, user } = useAuth();

    function logout() {
        signOut().then((res) => {
            if (res.success) {
                // do something
            }
        })
            .catch(err => console.log(err));
    }

    return (
        <React.Fragment>
            <div className="border rounded p-3 bg-light">
                <h6>Account Setting</h6>
                <div className="text-right">
                    <Button variant="danger" size="sm" onClick={() => logout()}>Signout</Button>
                </div>
            </div>

            <ReusableAccordion>
                <AccordionItems eventKey="update_profile" headerText="Profile Details" >
                    <ProfileDetails updateUserProfile={updateUserProfile} user={user} />
                </AccordionItems>
                <AccordionItems eventKey="ev0" headerText="Email Setting" >
                    <EmailSetting updateUserEmail={updateUserEmail} user={user} />
                </AccordionItems>
                <AccordionItems eventKey="update_password" headerText="Password Setting" >
                    <PasswordSetting updateUserPassword={updateUserPassword} />
                </AccordionItems>
            </ReusableAccordion>
        </React.Fragment>
    )
}

interface ProfileDetailsProps {
    updateUserProfile: (displayName: string, photoUrl: string) => Promise<CustomResponse>,
    user: any;
}
const ProfileDetails: React.FC<ProfileDetailsProps> = ({ updateUserProfile, user }) => {
    const email = user ? user.email : 'Email not provided';
    const { Snackbar, showMsg } = useSnackbar();

    const INITIAL_VALUES = {
        displayName: user ? user.displayName : '',
        photoUrl: user ? user.photoUrl : '',
    };

    function update(values: any): void {
        try {
            console.log(values)
            updateUserProfile(values.displayName, values.photoUrl).then((res) => {
                if (res.success) {
                    // do Something
                    showMsg('Password updated', res.message);
                }
                else {
                    showMsg('Password updated', res.message, 'warning');
                }
            });
        }
        catch (err) {
            throw err
        }
    };

    return (
        <React.Fragment>
            <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => update(values)}
            validationSchema={userProfileSchema}>
            {
                ({ handleBlur, handleSubmit, handleChange, touched, errors, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="sm" value={email} disabled></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="text" placeholder="Enter your name" name="displayName"
                                value={values.displayName} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.displayName && !!errors.displayName} />

                            <Form.Control.Feedback type="invalid">
                                {errors.displayName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="text" placeholder="place here your photo url" name="photoUrl"
                                value={values.photoUrl} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.photoUrl && !!errors.photoUrl} />

                            <Form.Control.Feedback type="invalid">
                                {errors.photoUrl}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-right">
                            <Button type="submit" variant="primary" size="sm">Save</Button>
                        </div>
                    </Form>
                )
            }
        </Formik>
        <Snackbar />
        </React.Fragment>
    )
}

interface EmailSettingProps {
    updateUserEmail: (newEmail: string) => Promise<CustomResponse>,
    user: any;
}
const EmailSetting: React.FC<EmailSettingProps> = ({ updateUserEmail, user }) => {
    const { Snackbar, showMsg } = useSnackbar();
    const email = user ? user.email : 'Email not provided';

    const INITIAL_VALUES = {
        newEmail: ''
    };

    function update(values: any): void {
        try {
            console.log(values)
            updateUserEmail(values.newEmail).then((res) => {
                if (res.success) {
                    // do Something
                    showMsg('Password updated', res.message);
                }
                else {
                    showMsg('Password updated', res.message, 'warning');
                }
            });
        }
        catch (err) {
            throw err
        }
    };

    return (
        <React.Fragment>
                    <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => update(values)}
            validationSchema={userEmailSchema}>
            {
                ({ handleBlur, handleSubmit, handleChange, touched, errors, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Current Email</Form.Label>
                            <Form.Control size="sm" value={email} disabled></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>New Email</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="email" placeholder="New email..." name="newEmail"
                                value={values.newEmail} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.newEmail && !!errors.newEmail} />

                            <Form.Control.Feedback type="invalid">
                                {errors.newEmail}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-right">
                            <Button type="submit" variant="primary" size="sm">Save</Button>
                        </div>
                    </Form>
                )
            }
        </Formik>
        <Snackbar />
        </React.Fragment>
    )
}

interface PasswordSettingProps {
    updateUserPassword: (newPassword: string) => Promise<CustomResponse>
}
const PasswordSetting: React.FC<PasswordSettingProps> = ({ updateUserPassword }) => {
    const { Snackbar, showMsg } = useSnackbar();

    const INITIAL_VALUES = {
        password: '',
        newPassword: '',
        passwordConfirmation: ''
    };

    function update(values: any): void {
        try {
            console.log(values)
            updateUserPassword(values.newPassword).then((res) => {
                if (res.success) {
                    // do Something
                    showMsg('Password updated', res.message);
                }
                else {
                    showMsg('Password updated', res.message, 'warning');
                }
            });
        }
        catch (err) {
            throw err
        }
    };

    return (
       <React.Fragment>
            <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => update(values)}
            validationSchema={PasswordSettingSchema}>
            {
                ({ handleBlur, handleSubmit, handleChange, touched, errors, values }) => (
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="password" placeholder="Current password..." name="password"
                                value={values.password} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.password && !!errors.password} />

                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="password" placeholder="New password..." name="newPassword"
                                value={values.newPassword} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.newPassword && !!errors.newPassword} />

                            <Form.Control.Feedback type="invalid">
                                {errors.newPassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control size="sm" autoComplete="off" type="password" placeholder="Confirm your password..." name="passwordConfirmation"
                                value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur}
                                isInvalid={touched.passwordConfirmation && !!errors.passwordConfirmation} />

                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-right">
                            <Button type="submit" variant="primary" size="sm">Save</Button>
                        </div>
                    </Form>
                )
            }
        </Formik>
        <Snackbar />
       </React.Fragment>
    )
}

export default Profile;
