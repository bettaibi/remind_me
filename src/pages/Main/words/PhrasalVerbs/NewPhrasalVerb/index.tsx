import React from 'react';
import { FullPageHeader } from '../../../../../components/FullPageContainer';
import { PhrasalModel } from '../../../../../model/app.model';
import { FieldArray, Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, Container } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';
import useAssistant from '../../../../../components/useAssistant';
import { v4 } from 'uuid';
import { useSharedContext } from '../../../../../Context';
import { useSnackbar } from '../../../../../components/Snackbar';
import { addPhrasalVerb } from '../../../../../store/actions/phrasalVerb.actions';

const INITIAL_VALUE: PhrasalModel = {
    label: '',
    definition: '',
    examples: ['', '', ''],
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
    spelling: yup.string().required('This is a required field')
})

interface commonProps{
    handleToogle: () => void;
    saveByKey: (obj: any, id: string) => any;
}
export const NewPhrasalVerb: React.FC<commonProps> = ({handleToogle, saveByKey}) => {
    const { dispatch } = useSharedContext();
    const { voiceHandler } = useAssistant();
    const { Snackbar, showMsg } = useSnackbar();

    const spellWord = (word: string) => {
        if (word) {
            voiceHandler(word);
        }
    }

    const create = async (values: PhrasalModel) => {
        try{
            const id = v4();
            const res = await saveByKey({...values, id}, id);
            if(res.success){
                showMsg('created', res.message);
                dispatch(addPhrasalVerb({...values, id}));
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
       <React.Fragment>
            <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => create(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <FullPageHeader handleToggle={handleToogle} title="New Phrasal Verb" />
                        <Container className="py-3">

                            <Form.Group>
                                <Form.Label>
                                    <span>Label</span>
                                    <span className="ml-2 icons" onClick={() => spellWord(values.label)} >
                                        <VolumeUp size="20" />
                                    </span>
                                </Form.Label>
                                <Form.Control placeholder="a word" autoComplete="off" name="label" size="sm"
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
                                    <Form.Control placeholder="Spelling" autoComplete="off" name="spelling" size="sm"
                                        onChange={handleChange} onBlur={handleBlur} value={values.spelling}
                                        isInvalid={touched.spelling && !!errors.spelling}
                                    ></Form.Control>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.spelling}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Definition / Meaning</Form.Label>
                                <Form.Control as="textarea" placeholder="word definition" size="sm" autoComplete="off" name="definition"
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
