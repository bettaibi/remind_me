import React, {useEffect, useState} from 'react';
import {
    Button,
    Form
} from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSharedContext } from '../../../Context';
import { useFireStore } from '../../../firebase/useFirestore';
import { BackupDataModel, BackupDatesModel } from '../../../model/app.model';
import { useCache } from '../../../cache';
import { useSnackbar } from '../../../components/Snackbar';

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
    const { getlastBackupDates } = useFireStore();

    useEffect(()=> {
        getdates();
    }, []);

    async function getdates(){
        try{
            const doc = await getlastBackupDates(user.uid);
            if(doc.exists){
                setUploadedAt(doc.data()?.uploadedAt || null);
                setmergedAt(doc.data()?.mergedAt || null);
            }
        }
        catch(err){
            throw err;
        }
    }

    return (
        <div className="bg-light p-3 border rounded">
            <h6>Backup Setting</h6>
            <p>
                All your data are stored <b className="text-info">locally</b> on your device, use a <b className="text-info">backup</b> file to share your local data between several devices.<br />
                Data are only stored on your devices. Without an existing backup file the access to your restoring data is <b className="text-danger">not possible.</b> <br />
                <b className="text-dark">Merge Data</b> to update your current saved data with the latest backup stored file. <br />
                <strong className="text-primary">Upload Data</strong> in order to generate a new backup file and store it on the server. <br />
                <span className="d-flex flex-column mt-1">
                    <small className="text-secondary"> Latest Merge: {uploadedAt?new Date(uploadedAt || '').toLocaleDateString("en-us"):'Not mention'}</small>
                    <small className="text-secondary"> Latest Upload: {mergedAt?new Date(mergedAt || '').toLocaleDateString("en-us") :'No file found'}</small>
                </span>
        
            </p>
            < CodeSecret id={user.uid} uploadedAt={uploadedAt} mergedAt={mergedAt} />
        </div>
    )
};

interface CodeSecretProps{
    id: string;
    uploadedAt: number | null;
    mergedAt: number | null;
}
const CodeSecret: React.FC<CodeSecretProps> = ({id, uploadedAt, mergedAt}) => {
    const { getDatetoStore, init } = useCache('');
    const { updateStoredData, updateDates, getStoredData } = useFireStore();
    const { Snackbar, showMsg } = useSnackbar();

    const mergeData = (resetForm: ()=> void) => {
        try{
            getStoredData(id).then((doc)=> {
                if(doc.exists){
                    init(doc.data()).then((res)=> {
                        if(res.success){
                            updateDates(id, {uploadedAt, mergedAt: Date.now()}).then(()=> {
                                showMsg('Success', 'your data is successfully merged', 'success');
                                resetForm();
                            }).catch(err => {
                                showMsg('Failure', err.message, 'warning');
                            });
                        }
                        else{
                            showMsg('Failure', 'Failed to merge data', 'warning');
                        }
                    })
                }
                else{
                    showMsg('Failure', 'Failed to reach data from the server', 'warning');
                }
            }).catch(err => {
                showMsg('Failure', err.message, 'warning');
            });
        }
        catch(err){
            showMsg('Failure', 'Failed to merge data', 'warning');
        }
    };

    const uploadData = async (resetForm: ()=> void) => {
        try{
            const dataModel: BackupDataModel = await getDatetoStore();
            updateStoredData(id, dataModel).then(()=> {
                updateDates(id, {uploadedAt: Date.now(), mergedAt}).then(()=> {
                    showMsg('Success', 'A new copy is uploaded', 'success');
                    resetForm();
                }).catch(err => {
                    showMsg('Failure', err.message, 'warning');
                });
            }).catch(err => {
                console.log(err.message)
                showMsg('Failure', err.message, 'warning');
            });
        } 
        catch(err){
            showMsg('Failure', 'Failed to upload data', 'warning');
        }
    };

    return (
        <React.Fragment>
            <Formik validationSchema={schema} onSubmit={(values) => console.log(values)}
                initialValues={defaultData}>
                {
                    ({ handleBlur, handleSubmit, handleChange, values, errors, touched, handleReset }) => (
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
                                <Button size="sm" variant="dark" className="mr-2" onClick={()=> mergeData(handleReset)}
                                disabled={values.code !== mySecret}>Merge Data</Button>
                                <Button size="sm" variant="primary"  onClick={()=> uploadData(handleReset)}
                                 disabled={values.code !== mySecret}>Upload data</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <Snackbar />
        </React.Fragment>
    );
};

export default Backup;
