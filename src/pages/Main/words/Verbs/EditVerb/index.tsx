import React, { Dispatch } from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';
import { Formik, FieldArray } from 'formik';
import { Form, Col, Card, Container } from 'react-bootstrap';
import { VerbModal } from '../../../../../model/app.model';

import * as yup from 'yup';
import { VolumeUp } from 'react-bootstrap-icons';
import UseAssistant from '../../../../../components/useAssistant';
import { Collections, useCache } from '../../../../../cache';
import { useSnackbar } from '../../../../../components/Snackbar';
import { updateVerb } from '../../../../../store/actions/verb.actions';

const schema = yup.object().shape({
    past: yup.string().required('This field is required').min(2, 'too short').max(50, 'too much'),
    label: yup.string().required('This field is required').min(2, 'too short').max(40, 'too much'),
    pastParticipal: yup.string().required('This field is required').min(2, 'too short').max(50, 'too much'),
    definition: yup.string().required('This field is required'),
    translation: yup.string().required('This field is required'),
    examples: yup.array().of(
        yup.string().required()
    ),
    synonyms: yup.array().of(
        yup.string()
    ),
    category: yup.string().required('This field is required!'),
    spelling: yup.string().required('This is a required field')
})

interface VerbProps {
    verb: VerbModal;
    handleToggle: () => void;
    dispatch: Dispatch<any>;
}

export const EditVerb: React.FC<VerbProps> = ({verb, handleToggle, dispatch}) => {

    const { voiceHandler } = UseAssistant();
    const { findOneAndUpdate } = useCache(Collections.VERBS);
    const { Snackbar, showMsg } = useSnackbar();

    const INITIAL_VALUE: VerbModal = {
        ...verb
    };

    const spellWord = (word: string) => {
        if (word) {
            voiceHandler(word);
        }
    }

    const update = async (values: VerbModal) => { 
        try{
            const id = verb.id || '';
            const res = await findOneAndUpdate(values, id);
            if(res.success){
                showMsg('Verb updated', 'A verb has been successfully updated');
                dispatch(updateVerb(id, values));
            }
            else{
                showMsg('Failed to update', res.message);
            }
        }
        catch(err){
            throw err;
        }
    };

    return (
        <React.Fragment>
           <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => update(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <FullPageHeader title = "Edit Verb" handleToggle={handleToggle} />
                        <Container className="py-3">
                            <Form.Row>
                                <Form.Group as={Col} xs="6">
                                    <Form.Label>
                                        <span>Infinitive</span>
                                        <span className="ml-2 icons" onClick={() => spellWord(values.label)} >
                                            <VolumeUp size="20" />
                                        </span>
                                    </Form.Label>
                                    <Form.Control placeholder="Infinitive Form" autoComplete="off" name="label" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.label}
                                        isInvalid={touched.label && !!errors.label}
                                    ></Form.Control>

                                    {!errors.label && <Form.Text className="text-muted">
                                        The infinitive form of verb that you would create.
                                    </Form.Text>}

                                    <Form.Control.Feedback type="invalid">
                                        {errors.label}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} xs="6">
                                    <Form.Label>Verb Category</Form.Label>
                                    <Form.Control size="sm" as="select" name="category"
                                        onChange={handleChange} onBlur={handleBlur} value={values.category}
                                        isInvalid={touched.category && !!errors.category}
                                        placeholder="In which category this verb is belong?">
                                        <option value="regular">Regular</option>
                                        <option value="irregular">Irregular</option>
                                    </Form.Control>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.category}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>
                                    <span>Simple Past</span>
                                    <span className="ml-2 icons" onClick={() => spellWord(values.past)} >
                                            <VolumeUp size="20" />
                                    </span>
                                    </Form.Label>
                                    <Form.Control placeholder="Past Form" autoComplete="off" name="past" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.past}
                                        isInvalid={touched.past && !!errors.past}
                                    ></Form.Control>

                                    {!errors.past && <Form.Text className="text-muted">
                                        The Simple Past form of verb that you would create.
                                    </Form.Text>}

                                    <Form.Control.Feedback type="invalid">
                                        {errors.past}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>
                                        <span>Past Participal</span>
                                        <span className="ml-2 icons" onClick={() => spellWord(values.pastParticipal)} >
                                            <VolumeUp size="20" />
                                        </span>
                                    </Form.Label>
                                    <Form.Control placeholder="Past Participal Form" size="sm" autoComplete="off" name="pastParticipal"
                                        onChange={handleChange} onBlur={handleBlur} value={values.pastParticipal}
                                        isInvalid={touched.pastParticipal && !!errors.pastParticipal}
                                    ></Form.Control>

                                    {!errors.pastParticipal && <Form.Text className="text-muted">
                                        The Past Participal form of verb that you would create.
                                    </Form.Text>}

                                    <Form.Control.Feedback type="invalid">
                                        {errors.pastParticipal}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Arabic Translation</Form.Label>
                                    <Form.Control placeholder="translate to arabic" autoComplete="off" name="translation" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.translation}
                                        isInvalid={touched.translation && !!errors.translation}
                                    ></Form.Control>

                                    {!errors.translation && <Form.Text className="text-muted">
                                        The arabic translation of verb that you would create.
                                    </Form.Text>}

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
                                    <Form.Control placeholder="Spelling" autoComplete="off" name="spelling" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.spelling}
                                        isInvalid={touched.spelling && !!errors.spelling}
                                    ></Form.Control>

                                    {!errors.spelling && <Form.Text className="text-muted">
                                        Spell the verb verb that you would create.
                                    </Form.Text>}

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
                                                            <small className="text-secondary">Enter two synonyms related to that verb (this section is optional). </small>
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
                                <Form.Control as="textarea" placeholder="Verb definition" size="sm" autoComplete="off" name="definition"
                                    onChange={handleChange} onBlur={handleBlur} value={values.definition}
                                    isInvalid={touched.definition && !!errors.definition}
                                ></Form.Control>

                                {!errors.definition && <Form.Text className="text-muted">
                                    The Definition of verb that you would create.
                            </Form.Text>}

                                <Form.Control.Feedback type="invalid">
                                    {errors.definition}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="mb-2">
                                <h6>Examples</h6>
                                <small className="text-secondary">Enter three sentences using the verb that you would learn</small>
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

                            <div className="mb-2">
                                <h6>Grammar Table</h6>
                                <small className="text-secondary">Fill in The Grammar table</small>
                            </div>

                            <FieldArray name="conjugation">
                                {
                                    () => (
                                        <div className="grammar-card">
                                            {
                                                values.conjugation && values.conjugation.length > 0 &&
                                                values.conjugation.map((item: any, index: number) => (
                                                    <Card key={'tense' + index}>
                                                        <Card.Header>{item.tense}</Card.Header>

                                                        <Card.Body>
                                                            {
                                                                item.content.map((sub: any, c: number) => (

                                                                    <Form.Group key={'sub' + c}>
                                                                        <Form.Row>
                                                                            <Form.Label column="sm" >{sub.subject}</Form.Label>
                                                                            <Col>
                                                                                <Form.Control placeholder="Convenient Form" size="sm" autoComplete="off"
                                                                                    name={`conjugation[${index}].content[${c}].value`} onBlur={handleBlur} onChange={handleChange}
                                                                                    value={values.conjugation[index].content[c].value}
                                                                                />
                                                                            </Col>
                                                                        </Form.Row>
                                                                    </Form.Group>

                                                                ))
                                                            }
                                                        </Card.Body>
                                                    </Card>
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
