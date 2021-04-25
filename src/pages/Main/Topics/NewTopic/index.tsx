import React from 'react';
import { v4 } from 'uuid';
import { useSnackbar } from '../../../../components/Snackbar';
import useAssistant from '../../../../components/useAssistant';
import { useSharedContext } from '../../../../Context';
import { TopicModel, VocabularyModal } from '../../../../model/app.model';
import { addTopic } from '../../../../store/actions/topic.actions';
import { AddProps } from '../../words/shared/words.model';
import { FullPageHeader } from '../../../../components/FullPageContainer';
import { FieldArray, Formik } from 'formik';
import { Form, Container, Button } from 'react-bootstrap';
import { Trash, VolumeUp } from 'react-bootstrap-icons';

import * as yup from 'yup';

const INITIAL_VALUE: TopicModel = {
    label: '',
    vocabs: [{ name: '', definition: '', example: '' }]
};

const schema = yup.object().shape({
    label: yup.string().required('Subject is required'),
    vocabs: yup.array().of(
        yup.object().shape({
            name: yup.string().required('Name is required'),
            example: yup.string().required('An Example is required'),
        })
    )
});

export const NewTopic: React.FC<AddProps> = ({ handleToogle, saveByKey }) => {
    const { dispatch } = useSharedContext();
    const { voiceHandler } = useAssistant();
    const { Snackbar, showMsg } = useSnackbar();

    const spellWord = (w: string) => {
        if (w) {
            voiceHandler(w);
        }
    }

    const create = async (values: TopicModel, resetForm: ()=> void) => {
        try {
            const id = v4();
            const res = await saveByKey({ ...values, id }, id);
            if (res.success) {
                showMsg('created', res.message);
                dispatch(addTopic({ ...values, id }));
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
            <Formik initialValues={INITIAL_VALUE} onSubmit={(values, {resetForm}) => create(values, resetForm)}
                validationSchema={schema}>
                {
                    ({ handleSubmit, handleChange, handleBlur, values, isValid, touched, errors }) => (
                        <Form onSubmit={handleSubmit}>
                            <FullPageHeader handleToggle={handleToogle} title="New Topic" />
                            <Container className="py-3">
                                <Form.Group>
                                    <Form.Label>
                                        <span>Subject</span>
                                        <span className="ml-2 icons" onClick={() => spellWord(values.label)}>
                                            <VolumeUp size="20" />
                                        </span>
                                    </Form.Label>
                                    <Form.Control spellCheck="true" autoComplete="off" placeholder="What's the name of the topic would you like talking about" name="label"
                                        onChange={handleChange} onBlur={handleBlur} value={values.label} size="sm"
                                        isInvalid={touched.label && !!errors.label} />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.label}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <FieldArray name="vocabs">
                                    {
                                        ({ remove, push }) => (
                                            <React.Fragment>
                                                <div className="d-flex flex-row justify-content-between align-items-center">
                                                    <h6 className="m-0">RELATED WORDS</h6>
                                                    <div>
                                                        <Button size="sm" variant="success" className="mr-2"
                                                            onClick={() => push({ name: '', translation: '', utility: '' })}>
                                                            New Word
                                                        </Button>
                                                    </div>
                                                </div>

                                                {values.vocabs.length > 0 && values.vocabs.map((item: VocabularyModal, i: number) => (
                                                    <div className="bg-light border rounded pt-3 px-3 mt-3" key={i + 'thin' + i}>
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="m-0">Word {i + 1}</h6>
                                                            <Button size="sm" variant="danger" onClick={() => remove(i)}
                                                                className="rounded-circle d-flex align-items-center align-self-end"
                                                                style={{ width: '32px', height: '32px' }}>
                                                                <Trash />
                                                            </Button>
                                                        </div>

                                                        <Form.Group>
                                                            <Form.Label>
                                                                <span>Name</span>
                                                                <span className="ml-2 icons" onClick={() => spellWord(values.vocabs[i].name)}>
                                                                    <VolumeUp size="20" />
                                                                </span>
                                                            </Form.Label>
                                                            <Form.Control autoComplete="off" size="sm" placeholder={`vocabs n° ${i + 1}`} name={`vocabs.${i}.name`}
                                                                onChange={handleChange} onBlur={handleBlur} value={values.vocabs[i].name}
                                                                isInvalid={touched.vocabs && !!errors.vocabs} />

                                                            <Form.Control.Feedback type="invalid">
                                                                Name is required
                                                            </Form.Control.Feedback>
                                                        </Form.Group>

                                                        <Form.Group>
                                                            <Form.Label>
                                                                <span>Example</span>
                                                                <span className="ml-2 icons" onClick={() => spellWord(values.vocabs[i].example)}>
                                                                    <VolumeUp size="20" />
                                                                </span>
                                                            </Form.Label>
                                                            <Form.Control autoComplete="off" size="sm" placeholder="give an example using the above word" name={`vocabs.${i}.example`}
                                                                onChange={handleChange} onBlur={handleBlur} value={values.vocabs[i].example}
                                                                isInvalid={touched.vocabs && !!errors.vocabs} />

                                                            <Form.Control.Feedback type="invalid">
                                                                Example is required
                                                            </Form.Control.Feedback>
                                                        </Form.Group>

                                                        <Form.Group>
                                                            <Form.Label>
                                                                <span>Definition</span>
                                                                <span className="ml-2 icons" onClick={() => spellWord(values.vocabs[i].definition)}>
                                                                    <VolumeUp size="20" />
                                                                </span>
                                                            </Form.Label>
                                                            <Form.Control autoComplete="off" size="sm" as="textarea" placeholder="Is That thing useful?" name={`vocabs.${i}.definition`}
                                                                onChange={handleChange} onBlur={handleBlur} value={values.vocabs[i].definition} />
                                                            </Form.Group>
                                                    </div>
                                                ))}
                                            </React.Fragment>
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
