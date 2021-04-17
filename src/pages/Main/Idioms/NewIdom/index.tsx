import React from 'react';
import { IdiomsModel } from '../../../../model/app.model';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { v4 } from 'uuid';
import { useSharedContext } from '../../../../Context';
import { addIdiom } from '../../../../store/actions/idioms.actions';

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
    showMsg: (title: string, msg: string, type?: any) => void;
    saveByKey: (obj: any, id: string) => any;
}
export const NewIdiom: React.FC<commonProps> = ({handleToogle, saveByKey, showMsg}) => {
    const { dispatch } = useSharedContext();

    const create = async (values: IdiomsModel, resetForm: ()=> void) => {
        try{
            const id = v4();
            const res = await saveByKey({...values, id}, id);
            if(res.success){
                showMsg('Idiom created', res.message);
                dispatch(addIdiom({...values, id}));
                setTimeout(()=>{
                    handleToogle();
                },0);
                resetForm();
            }
            else{
                showMsg('Failed to Created', 'Failed to persist', 'danger');
            }
            
        }
        catch(err){
            throw err;
        }
    }
    
    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value, {resetForm}) => create(value, resetForm)} validationSchema={schema}>
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
