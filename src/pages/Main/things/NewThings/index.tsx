import React, { useRef, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { PicThingsModel, ThingModel } from '../../../../model/app.model';
import { Trash } from 'react-bootstrap-icons';
import * as yup from 'yup';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { useSnackbar } from '../../../../components/Snackbar';
import { Collections, useCache } from '../../../../cache';


const INITIAL_VALUE: PicThingsModel = {
    label: '',
    picture: '',
    things: [{ name: '', translation: '', utility: '' }]
}

const schema = yup.object().shape({
    label: yup.string().required('Subject is required'),
    things: yup.array().of(
        yup.object().shape({
            name: yup.string().required('Name is required'),
            translation: yup.string().required('Translation is required'),
            utility: yup.string().required('Utility is required'),
        })
    )
})

const NewThings: React.FC = () => {
    const {saveByKey } = useCache(Collections.THINGS);
    let currentPic: any = null;
    
    const save = (values: PicThingsModel, resetForm : () => void) => {
        try{
            console.log(values);
            resetForm();
            console.log(currentPic)
        }
        catch(err){
            throw err;
        }
    }

    const getCurrentPic = (pic: any) =>{
        try{
            currentPic = pic;
            console.log(pic)
        }
        catch(err){
            throw err;
        }
    };

    return (
        <React.Fragment>
            <div className="bg-light border rounded overflow-hidden mb-3" style={{ height: '300px' }}>
                <PictureComponent getCurrentPic = {getCurrentPic} />
            </div>

            <ThingsForm save = {save} />
        </React.Fragment>
    )
}

interface ThingsFormProps{
    save: (values: PicThingsModel, resetForm : () => void) => void;
}

const ThingsForm: React.FC<ThingsFormProps> = ({save}) => {

    const create = (values: PicThingsModel, resetForm : () => void) =>{
        try{
            save(values, resetForm);
        }
        catch(err){
            throw err;
        }
    };

    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(values, {resetForm}) => create(values, resetForm)}
            validationSchema={schema}>
            {
                ({ handleSubmit, handleChange, handleBlur, values, isValid, touched, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control autoComplete="off" placeholder="What's the subject of the pic" name="label"
                                onChange={handleChange} onBlur={handleBlur} value={values.label} size="sm"
                                isInvalid={touched.label && !!errors.label} />

                            <Form.Control.Feedback type="invalid">
                                {errors.label}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <FieldArray name="things">
                            {
                                ({ remove, push}) => (
                                    <React.Fragment>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <h6 className="m-0">CREATE THINGS</h6>
                                            <div>
                                                <InsertRecord push = {push} />
                                                <Button size="sm" variant="primary" type="submit">Save All</Button>
                                            </div>
                                        </div>

                                        {values.things.length > 0 && values.things.map((item: ThingModel, i: number) => (
                                            <div className="bg-light border rounded pt-3 px-3 mt-3" key={i + 'thin' + i}>
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="m-0">Thing {i+1}</h6>
                                                    <RemoveRecord remove={remove} index = {i} />
                                                </div>
                                                <Form.Row>
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control autoComplete="off" size="sm" placeholder={`Things n° ${i + 1}`} name={`things.${i}.name`}
                                                            onChange={handleChange} onBlur={handleBlur} value={values.things[i].name}
                                                            isInvalid={touched.things && !!errors.things} />

                                                        <Form.Control.Feedback type="invalid">
                                                            Name is required
                                                         </Form.Control.Feedback>
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Label>Arabic Translation</Form.Label>
                                                        <Form.Control autoComplete="off" size="sm" placeholder="translation" name={`things.${i}.translation`}
                                                            onChange={handleChange} onBlur={handleBlur} value={values.things[i].translation}
                                                            isInvalid={touched.things && !!errors.things} />

                                                        <Form.Control.Feedback type="invalid">
                                                            Translation is required
                                                 </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Group>
                                                    <Form.Label>Utility</Form.Label>
                                                    <Form.Control autoComplete="off" size="sm" as="textarea" placeholder="Is That thing useful?" name={`things.${i}.utility`}
                                                        onChange={handleChange} onBlur={handleBlur} value={values.things[i].utility}
                                                        isInvalid={touched.things && !!errors.things} />
                                                    <Form.Control.Feedback type="invalid">
                                                        Utility is required
                                                  </Form.Control.Feedback>
                                                </Form.Group>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                )
                            }
                        </FieldArray>


                    </Form>
                )
            }
        </Formik>
    )
}

interface RemoveRecordProps{
    remove: (index: number) => void;
    index: number;
}
const RemoveRecord: React.FC<RemoveRecordProps> = ({remove, index}) => {
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this record? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    function onConfirm() {
        console.log("Confirm Clicked");
        toggleConfirmMessage();
        setTimeout(()=>{
            remove(index);
        },0)
    }

    return (
        <React.Fragment>
            <Button size="sm" variant="danger" onClick={toggleConfirmMessage}
                className="rounded-circle d-flex align-items-center align-self-end"
                style={{ width: '32px', height: '32px' }}>
                <Trash />
            </Button>
            <ConfirmDialog />
        </React.Fragment>
    )
}

interface InsertRecordProp{
    push: (obj: any) => void;
}
const InsertRecord: React.FC<InsertRecordProp> = ({push}) =>{
    const { Snackbar, showMsg } = useSnackbar();
    
    const newRecord = async () => {
        push({name: '', translation: '', utility: ''});
        showMsg('Record Inserted', 'A new record has been created for you.');
    }
    return (
        <React.Fragment>
            <Button size="sm" variant="success" className="mr-2"
                onClick= {newRecord}>
                New Thing
            </Button>
            <Snackbar />
        </React.Fragment>
    )
}

interface PictureComponentProps{
    getCurrentPic: (pic: any) => void;
}
const PictureComponent: React.FC<PictureComponentProps> = ({getCurrentPic}) => {
    const [pic, setPic] = useState<any>(null);

    const onPicChange = async (file: File) => {
        try {
            const base64 = await toBase64(file);
            getCurrentPic(base64);
            setPic(base64);
        }
        catch (err) {
            throw err;
        }
    }

    const toBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return (
        <React.Fragment>
            {!pic && <div className="text-secondary d-flex flex-column text-center h-100 align-items-center justify-content-center">
                <p>Click on the button below to add a picture</p>
                <FileUpload onPicChange={(f) => onPicChange(f)} />
            </div>}

            {pic && <img src={pic} alt="uploaded pic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </React.Fragment>
    )
}

interface FileUploadProps {
    onPicChange: (f: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onPicChange }) => {
    const fileRef = useRef<HTMLInputElement | null>(null);

    const chooseFile = () => {
        fileRef.current?.click();
    }

    const handleChange = (e: any) => {
        onPicChange(e.target.files[0]);
    }

    return (
        <React.Fragment>
            <Button variant="primary" size="sm" onClick={chooseFile}>
                Choose a Picture
            </Button>

            <input hidden type="file" ref={fileRef} onChange={handleChange} accept="image/*" />
        </React.Fragment>
    )
}

export default NewThings;