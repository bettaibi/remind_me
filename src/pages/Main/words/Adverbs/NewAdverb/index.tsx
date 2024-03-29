import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';
import { AdverbModel } from '../../../../../model/app.model';
import { FieldArray, Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, Container } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';
import { AddProps } from '../../shared/words.model';
import { addAdverb } from '../../../../../store/actions/adverb.actions';
import { useSharedContext } from '../../../../../Context';
import useAssistant from '../../../../../components/useAssistant';
import { useSnackbar } from '../../../../../components/Snackbar';
import { v4 } from 'uuid';

const INITIAL_VALUE: AdverbModel = {
    label: '',
    definition: '',
    examples: ['', '', ''],
    synonyms: ['', ''],
    translation: '',
    spelling: ''
}

const schema = yup.object().shape({
    label: yup.string().required('This field is required').min(2, 'too short').max(40, 'too much'),
    definition: yup.string().required('This field is required'),
    translation: yup.string().required('This field is required'),
    examples: yup.array().of(
        yup.string().required()
    ),
    synonyms: yup.array().of(
        yup.string()
    ),
    spelling: yup.string().required('This is a required field')
})

export const NewAdverb: React.FC<AddProps> = ({ handleToogle, saveByKey }) => {
    const { dispatch } = useSharedContext();
    const { voiceHandler } = useAssistant();
    const { Snackbar, showMsg } = useSnackbar();

    const spellWord = (w: string) => {
        if (w) {
            voiceHandler(w);
        }
    }

    const create = async (values: AdverbModel, resetForm: ()=> void) => {
        try {
            const id = v4();
            const res = await saveByKey({ ...values, id }, id);
            if (res.success) {
                showMsg('created', res.message);
                dispatch(addAdverb({ ...values, id }));
                resetForm();
            }
            else {
                showMsg('Failed to Created', res.message, 'warning');
            }

        }
        catch (err) {
            throw err;
        }
    }

    return (
        <React.Fragment>
            <Formik initialValues={INITIAL_VALUE} onSubmit={(value , {resetForm}) => create(value, resetForm)} validationSchema={schema}>
                {
                    ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <FullPageHeader handleToggle={handleToogle} title="New Adverb" />
                            <Container className="py-3">

                                <Form.Group>
                                    <Form.Label>
                                        <span>Label</span>
                                        <span className="ml-2 icons" onClick={() => spellWord(values.label)} >
                                            <VolumeUp size="20" />
                                        </span>
                                    </Form.Label>
                                    <Form.Control spellCheck="true" placeholder="a word" autoComplete="off" name="label" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.label}
                                        isInvalid={touched.label && !!errors.label}
                                    ></Form.Control>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.label}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Arabic Translation</Form.Label>
                                        <Form.Control placeholder="translate to arabic" autoComplete="off" name="translation" size="sm"
                                            onChange={handleChange} onBlur={handleBlur} value={values.translation}
                                            isInvalid={touched.translation && !!errors.translation}
                                        ></Form.Control>

                                        <Form.Control.Feedback type="invalid">
                                            {errors.translation}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>
                                            <span>
                                                Spelling
                                       </span>
                                            <span className="ml-2 icons" onClick={() => spellWord(values.spelling)} >
                                                <VolumeUp size="20" />
                                            </span>
                                        </Form.Label>
                                        <Form.Control spellCheck="true" placeholder="Spelling" autoComplete="off" name="spelling" size="sm"
                                            onChange={handleChange} onBlur={handleBlur} value={values.spelling}
                                            isInvalid={touched.spelling && !!errors.spelling}
                                        ></Form.Control>

                                        <Form.Control.Feedback type="invalid">
                                            {errors.spelling}
                                        </Form.Control.Feedback>
                                    </Form.Group>


                                </Form.Row>

                                <FieldArray name="synonyms">
                                    {
                                        () => (
                                            <React.Fragment>
                                                {
                                                    values.synonyms.length > 0 && (
                                                        <React.Fragment>
                                                            <div className="mb-2">
                                                                <h6>Synonyms</h6>
                                                                <small className="text-secondary">Enter two synonyms related to inserted word (this section is optional). </small>
                                                            </div>

                                                            <Form.Row>
                                                                {
                                                                    values.synonyms.map((item: string, index: number) => (
                                                                        <Form.Group as={Col} xs="6" key={'syno' + index}>
                                                                            <Form.Label>Synonym {index + 1}: </Form.Label>
                                                                            <Form.Control placeholder="synonym" size="sm" autoComplete="off" name={`synonyms.${index}`}
                                                                                onChange={handleChange} onBlur={handleBlur} value={values.synonyms[index]}
                                                                            ></Form.Control>
                                                                        </Form.Group>
                                                                    ))
                                                                }
                                                            </Form.Row>
                                                        </React.Fragment>
                                                    )
                                                }
                                            </React.Fragment>
                                        )
                                    }
                                </FieldArray>

                                <Form.Group>
                                    <Form.Label>Definition / Meaning</Form.Label>
                                    <Form.Control spellCheck="true" as="textarea" placeholder="word definition" size="sm" autoComplete="off" name="definition"
                                        onChange={handleChange} onBlur={handleBlur} value={values.definition}
                                        isInvalid={touched.definition && !!errors.definition}
                                    ></Form.Control>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.definition}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="mb-2">
                                    <h6>Examples</h6>
                                    <small className="text-secondary">Enter three sentences using the word that you would learn</small>
                                </div>

                                <FieldArray name="examples">
                                    {
                                        () => (
                                            <div>

                                                {
                                                    values.examples && values.examples.length > 0 &&
                                                    values.examples.map((exmp: string, index: number) => (
                                                        <Form.Group key={'exp' + index}>
                                                            <Form.Label>Sentence {index + 1}: </Form.Label>
                                                            <Form.Control name={`examples.${index}`} as="textarea" placeholder={'We are about writing sentence number ' + (index + 1)} size="sm" autoComplete="off"
                                                                onChange={handleChange} onBlur={handleBlur} value={values.examples[index]}
                                                                isInvalid={touched.examples && !!errors.examples} />
                                                            <Form.Control.Feedback type="invalid">
                                                                {`Sentence N° ${index + 1} is required`}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </FieldArray>

                            </Container>
                        </Form>
                    )
                }
            </Formik>
            <Snackbar />
        </React.Fragment>
    )
}
