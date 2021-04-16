import React from 'react';
import { TensePracticeModel } from '../../../../model/app.model';
import { EditProps } from '../../words/shared/words.model';
import { FullPageHeader } from '../../../../components/FullPageContainer';
import { Form, Container } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';

import * as yup from 'yup';
import { useSharedContext } from '../../../../Context';
import { useSnackbar } from '../../../../components/Snackbar';
import { updateTense } from '../../../../store/actions/tenses.actions';

const schema = yup.object().shape({
    label: yup.string().required('This field is required'),
    sentences: yup.array().of(
        yup.object().shape({
            sentence: yup.string().required(),
        })
    )
})

export const EditSentences: React.FC<EditProps> = ({handleToogle, word, findOneAndUpdate}) => {

    const { dispatch } = useSharedContext();
    const { Snackbar, showMsg } = useSnackbar();

    const update = async (values: TensePracticeModel) => { 
        try{
            const id = word.id || '';
            const res = await findOneAndUpdate(values, id);
            if(res.success){
                showMsg('Word updated', res.message);
                dispatch(updateTense(id, values));
            }
            else{
                showMsg('Failed to update', res.message, 'danger');
            }
        }
        catch(err){
            throw err;
        }
    };

    const INITIAL_VALUES: TensePracticeModel = {
        ...word
    };
    

    return (
        <React.Fragment>
            <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => update(values)}
                validationSchema={schema}>
                {
                    ({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <FullPageHeader handleToggle={handleToogle} title="Edit Sentences" />
                            <Container className="py-3">
                                <Form.Group>
                                    <Form.Label>Base Sentence</Form.Label>
                                    <Form.Control autoComplete="off" size="sm" placeholder="Enter the base sentence" name="label"
                                        onChange={handleChange} onBlur={handleBlur} value={values.label}
                                        isInvalid={touched.label && !!errors.label} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.label}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="p-3 bg-light border rounded">
                                    <FieldArray name="sentences">
                                        {
                                            () => (
                                                <React.Fragment>
                                                    {
                                                        values.sentences.length > 0 && values.sentences.map((item: any, index: number) => (
                                                            <Form.Group key={'tesen' + index}>
                                                                <Form.Label>{item.tense}</Form.Label>
                                                                <Form.Control autoComplete="off" size="sm" placeholder={`Switch the base sentense to the ${item.tense} tense`} name={`sentences.${index}.sentence`}
                                                                    onChange={handleChange} onBlur={handleBlur} value={values.sentences[index].sentence}
                                                                    isInvalid={touched.sentences && !!errors.sentences} />

                                                                <Form.Control.Feedback type="invalid">
                                                                    This field is required
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        ))
                                                    }
                                                </React.Fragment>
                                            )
                                        }
                                    </FieldArray>
                                </div>
                            </Container>

                        </Form>
                    )
                }
            </Formik>
            <Snackbar />
        </React.Fragment>
    )
}
