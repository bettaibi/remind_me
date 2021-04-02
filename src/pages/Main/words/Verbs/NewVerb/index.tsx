import React from 'react';
import { Formik, FieldArray } from 'formik';
import { Form, Col, Card } from 'react-bootstrap';
import { VerbModal } from '../../../../../model/app.model';

import * as yup from 'yup';
import conjugationTable from '../../../../../model/conjugationTable.model';


const INITIAL_VALUE: VerbModal = {
    past: '',
    label: '',
    pastParticipal: '',
    definition: '',
    examples: ['', '', ''],
    conjugation: conjugationTable
}

const schema = yup.object().shape({
    past: yup.string().required('This field is required').min(2, 'too short').max(50, 'too much'),
    label: yup.string().required('This field is required').min(2, 'too short').max(40, 'too much'),
    pastParticipal: yup.string().required('This field is required').min(2, 'too short').max(50, 'too much'),
    definition: yup.string().required('This field is required'),
    examples: yup.array().of(
        yup.string().required()
    ),
    conjugation: yup.array().of(
        yup.object().shape({
            content: yup.array().of(
                yup.object().shape({
                    value: yup.string().required()
                })
            )
        })
    )
})

export const NewVerb: React.FC = () => {

    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => console.log(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, isValid, values }) => (
                    <Form onSubmit={handleSubmit} className="pt-3">
                        <Form.Row>
                            <Form.Group as={Col} xs="12">
                                <Form.Label>Infinitive</Form.Label>
                                <Form.Control placeholder="Infinitive Form" autoComplete="off" name="infinitive" size="sm"
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
                            <Form.Group as={Col}>
                                <Form.Label>Simple Past</Form.Label>
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
                                <Form.Label>Past Participal</Form.Label>
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

                        <FieldArray name="examples">
                            {
                                () => (
                                    <div>
                                        <h6>Examples</h6>
                                        <small className="text-secondary">Enter three sentences using the verb that you would learn</small>
                                        {
                                            values.examples && values.examples.length > 0 &&
                                            values.examples.map((exmp: string, index: number) => (
                                                <Form.Group key={'exp' + index}>
                                                    <Form.Label>Sentence {index + 1}: </Form.Label>
                                                    <Form.Control name={`examples.${index}`} as="textarea" placeholder={'We are about writing sentence number ' + (index + 1)} size="sm" autoComplete="off"
                                                        onChange={handleChange} onBlur={handleBlur} value={values.examples[index]}
                                                        isInvalid={touched.examples && !!errors.examples} />
                                                    <Form.Control.Feedback type="invalid">
                                                       {`Sentence N° ${index+1} is required`}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </FieldArray>

                        <div className="mb-3">
                          <h6>Grammar Table</h6>
                          <small className="text-secondary">Fill in The Grammar table</small>
                        </div>

                        <FieldArray name="conjugation">
                            {
                                () => (
                                    <div className="grammar-card">
                                        {
                                            values.conjugation && values.conjugation.length > 0 &&
                                            values.conjugation.map((item: any, index: number)=>(
                                                <Card key={'tense'+index}>
                                                    <Card.Header>{item.tense}</Card.Header>

                                                    <Card.Body>
                                                        {
                                                            item.content.map((sub: any, c: number)=>(
                                                                
                                                            <Form.Group key={'sub'+c}>
                                                                <Form.Row>
                                                                    <Form.Label column="sm" >{sub.subject}</Form.Label>
                                                                    <Col>
                                                                    <Form.Control placeholder="Convenient Form" size="sm" autoComplete="off"
                                                                    name={`conjugation[${index}].content[${c}].value`} onBlur={handleBlur} onChange={handleChange}
                                                                    value={values.conjugation[index].content[c].value}
                                                                    isInvalid={touched.conjugation && !!errors.conjugation}
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

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
