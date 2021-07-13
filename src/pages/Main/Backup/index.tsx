import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    Spinner
} from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSharedContext } from '../../../Context';

const defaultData = { code: '' };
const mySecret = process.env.REACT_APP_SECRET_CODE;

const schema = yup.object().shape({
    code: yup.string().required('This field is required').min(10, 'Code secret must has 10 letters')
        .max(10, 'Code secret must has 10 letters').oneOf([mySecret], 'Secret code mismatch')
});

const Backup: React.FC = () => {
    const [ uploadedAt, setUploadedAt ] = useState(null);
    const [ mergedAt, setmergedAt ] = useState(null);
    const {user} = useSharedContext();

    useEffect(()=> {
       const isFound = sessionStorage.getItem('backup');
       if(isFound) {
        setUploadedAt(JSON.parse(isFound).uploadedAt);
        setmergedAt(JSON.parse(isFound).mergedAt);
       }
       else{

       }
    }, []);

    return (
        <div className="bg-light p-3 border rounded">
            <h6>Backup Setting</h6>
            <p>
                All your data are stored <b className="text-info">locally</b> on your device, use a <b className="text-info">backup</b> file to share your local data between several devices.<br />
                Data are only stored on your devices. Without an existing backup file the access to your restoring data is <b className="text-danger">not possible.</b> <br />
                <b className="text-dark">Merge Data</b> to update your current saved data with the latest backup stored file. <br />
                <strong className="text-primary">Upload Data</strong> in order to generate a new backup file and store it on the server. <br />
                <span className="d-flex flex-column mt-1">
                    <small className="text-secondary"> Latest Merge: {uploadedAt?uploadedAt:'Not mention'}</small>
                    <small className="text-secondary"> Latest Upload: {mergedAt?mergedAt:'No file found'}</small>
                </span>
                <span className="link">Refresh <Spinner animation="border" size="sm" /></span>
            </p>
            < CodeSecret />
        </div>
    )
};

const CodeSecret: React.FC = () => {

    const mergeData = () => {

    };

    const uploadData = () => {

    };

    return (
        <React.Fragment>
            <Formik validationSchema={schema} onSubmit={(values, { resetForm }) => console.log(values)}
                initialValues={defaultData}>
                {
                    ({ handleBlur, handleSubmit, handleChange, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control autoComplete="off" size="sm" placeholder="Enter the secret code" name="code"
                                    onChange={handleChange} onBlur={handleBlur} value={values.code}
                                    isInvalid={touched.code && !!errors.code} />

                                <Form.Control.Feedback type="invalid">
                                    {errors.code}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-right mt-3">
                                <Button size="sm" variant="dark" className="mr-2" onClick={mergeData}
                                disabled={values.code !== mySecret}>Merge Data</Button>
                                <Button size="sm" variant="primary"  onClick={uploadData}
                                 disabled={values.code !== mySecret}>Upload data</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    );
};

export default Backup;
