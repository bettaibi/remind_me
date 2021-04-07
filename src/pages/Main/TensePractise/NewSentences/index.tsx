import React from 'react';
import { TensePracticeModel } from '../../../../model/app.model';
import { FullPageHeader } from '../../../../components/FullPageContainer';
import { Form, Container } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';

import * as yup from 'yup';

const INITIAL_VALUES: TensePracticeModel = {
    label: '',
    sentences: [
        {tense: 'Present Simple', sentence: ''},
        {tense: 'Present Progressive', sentence: ''},
        {tense: 'Present Perfect', sentence: ''},
        {tense: 'Present Perfect Prgressive', sentence: ''},
        {tense: 'Past Simple', sentence: ''},
        {tense: 'Past Progressive', sentence: ''},
        {tense: 'Past Perfect', sentence: ''},
        {tense: 'Past Perfect Prgressive', sentence: ''},
        {tense: 'Future Simple', sentence: ''},
        {tense: 'Future Progressive', sentence: ''},
        {tense: 'Future Perfect', sentence: ''},
        {tense: 'Future Perfect Prgressive', sentence: ''},
    ]
}

const schema = yup.object().shape({
    label: yup.string().required('This field is required'),
    sentences: yup.array().of(
        yup.object().shape({
            sentence: yup.string().required(),
        })
    )
})

interface commonProps{
    handleToogle: () => void;
}

export const NewSentences: React.FC<commonProps> = ({handleToogle}) => {
    return (
        <Formik initialValues= {INITIAL_VALUES} onSubmit = { (values) => console.log(values)}
        validationSchema= {schema}>
            {
                ({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
                    <Form onSubmit={handleSubmit}>
                        <FullPageHeader handleToggle={handleToogle} title="build Sentences" />
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
                                                    values.sentences.length > 0 && values.sentences.map((item: any, index: number)=>(
                                                        <Form.Group key={'tesen'+index}>
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
    )
}
