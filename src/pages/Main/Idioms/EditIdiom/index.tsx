import React from 'react';
import { useSharedContext } from '../../../../Context';
import { CustomResponse, IdiomsModel } from '../../../../model/app.model';
import { updateIdiom } from '../../../../store/actions/idioms.actions';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
    label: yup.string().required('This field is required'),
    explication: yup.string().required('This field is required'),
})

interface commonProps{
    handleToogle: () => void;
    word: any;
    showMsg: (title: string, msg: string, type?: any) => void;
    findOneAndUpdate: (obj: any, id: string) => Promise<CustomResponse>;
}
export const EditIdiom: React.FC<commonProps> = ({handleToogle, word, findOneAndUpdate, showMsg}) => {
    const { dispatch } = useSharedContext();

    const update = async (values: IdiomsModel) => { 
        try{
            const id = word.id || '';
            const res = await findOneAndUpdate(values, id);
            if(res.success){
                showMsg('Idiom updated', res.message);
                dispatch(updateIdiom(id, values));
                setTimeout(() => {
                    handleToogle();
                },0);
            }
            else{
                showMsg('Failed to update', res.message, 'danger');
            }
        }
        catch(err){
            throw err;
        }
    };

    const INITIAL_VALUE: IdiomsModel = {
      ...word
    };

    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => update(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>

                            <Form.Group>
                                <Form.Label>
                                    Phrase / Idiom
                                </Form.Label>
                                <Form.Control spellCheck="true" placeholder="Write something..." autoComplete="off" name="label" size="sm"
                                    onChange={handleChange} onBlur={handleBlur} value={values.label}
                                    isInvalid={touched.label && !!errors.label}
                                ></Form.Control>

                                <Form.Control.Feedback type="invalid">
                                    {errors.label}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Explication / Meaning</Form.Label>
                                <Form.Control spellCheck="true" as="textarea" placeholder="let me explain" size="sm" autoComplete="off" name="explication"
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
