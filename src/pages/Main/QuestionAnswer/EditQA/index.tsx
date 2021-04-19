import React from 'react';
import { useSharedContext } from '../../../../Context';
import { CustomResponse, QAModel } from '../../../../model/app.model';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { updateQA } from '../../../../store/actions/questionAnswer.actions';

const schema = yup.object().shape({
    label: yup.string().required('This field is required'),
    result: yup.string().required('This field is required'),
})

interface commonProps {
    handleToogle: () => void;
    word: any;
    showMsg: (title: string, msg: string, type?: any) => void;
    findOneAndUpdate: (obj: any, id: string) => Promise<CustomResponse>;
}
export const EditQA: React.FC<commonProps> = ({ handleToogle, word, findOneAndUpdate, showMsg }) => {
    const { dispatch } = useSharedContext();

    const update = async (values: QAModel) => {
        try {
            const id = word.id || '';
            const res = await findOneAndUpdate(values, id);
            if (res.success) {
                showMsg('QA updated', res.message);
                dispatch(updateQA(id, values));
                setTimeout(() => {
                    handleToogle();
                }, 0);
            }
            else {
                showMsg('Failed to update', res.message, 'danger');
            }
        }
        catch (err) {
            throw err;
        }
    };

    const INITIAL_VALUE: QAModel = {
        ...word
    };

    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => update(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>
                                Q/A
                                </Form.Label>
                            <Form.Control placeholder="Write a question or give an answer.." autoComplete="off" name="label" size="sm"
                                onChange={handleChange} onBlur={handleBlur} value={values.label}
                                isInvalid={touched.label && !!errors.label}
                            ></Form.Control>

                            <Form.Control.Feedback type="invalid">
                                {errors.label}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Result
                                </Form.Label>
                            <Form.Control placeholder="Write the appropriate result.." autoComplete="off" name="result" size="sm"
                                onChange={handleChange} onBlur={handleBlur} value={values.result}
                                isInvalid={touched.result && !!errors.result}
                            ></Form.Control>

                            <Form.Control.Feedback type="invalid">
                                {errors.result}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-right">
                            <Button variant="secondary" size="sm" onClick={handleToogle}>Close</Button>
                            <Button variant="primary" className="ml-2" size="sm" type="submit">Save</Button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}
