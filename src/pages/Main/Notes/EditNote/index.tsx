import React from 'react';
import { GrammarNotesModel } from '../../../../model/app.model';
import { EditProps } from '../../words/shared/words.model';
import { FullPageHeader } from '../../../../components/FullPageContainer';
import { Form, Button, Container } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { Trash } from 'react-bootstrap-icons';

import * as yup from 'yup';
import { useSharedContext } from '../../../../Context';
import { useSnackbar } from '../../../../components/Snackbar';
import { updateNote } from '../../../../store/actions/note.actions';

const schema = yup.object().shape({
    label: yup.string().required('This Field is required'),
    note: yup.string().required('This Field is required'),
    question: yup.string().required('This Field is required'),
    examples: yup.array().of(
        yup.object().shape({
            sentence: yup.string().required('This Field is required'),
            answers: yup.array().of(
                yup.string()
            )
        })
    )
});


export const EditNote: React.FC<EditProps> = ({handleToogle, word, findOneAndUpdate}) => {
    const { dispatch } = useSharedContext();
    const { Snackbar, showMsg } = useSnackbar();

    const update = async (values: GrammarNotesModel) => { 
        try{
            const id = word.id || '';
            const res = await findOneAndUpdate(values, id);
            if(res.success){
                showMsg('Word updated', res.message);
                dispatch(updateNote(id, values));
            }
            else{
                showMsg('Failed to update', res.message, 'danger');
            }
        }
        catch(err){
            throw err;
        }
    };

    const INITIAL_VALUES: GrammarNotesModel = {
        ...word
    };

    return (
        <React.Fragment>
             <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => update(values)}
         validationSchema = {schema}>
             {
                 ({ handleBlur, handleChange, handleSubmit, touched, errors, values }) => (
                     <Form onSubmit={handleSubmit}>
                         <FullPageHeader handleToggle={handleToogle} title="Edit Note" />
                         <Container className="py-3">
                             <Form.Group>
                                 <Form.Label>Title</Form.Label>
                                 <Form.Control autoComplete="off" size="sm" placeholder="Enter a title" name="label"
                                     onChange={handleChange} onBlur={handleBlur} value={values.label}
                                     isInvalid={touched.label && !!errors.label} />
 
                                 <Form.Control.Feedback type="invalid">
                                     {errors.label}
                                 </Form.Control.Feedback>
                             </Form.Group>
 
                             <Form.Group>
                                 <Form.Label>Note</Form.Label>
                                 <Form.Control autoComplete="off" size="sm" placeholder="your notes here.." name="note"
                                     onChange={handleChange} onBlur={handleBlur} value={values.note}
                                     isInvalid={touched.note && !!errors.note} />
 
                                 <Form.Control.Feedback type="invalid">
                                     {errors.note}
                                 </Form.Control.Feedback>
                             </Form.Group>
 
                             <Form.Group>
                                 <Form.Label>Question (<small>A general question which adapts with the case of the note</small>)</Form.Label>
                                 <Form.Control autoComplete="off" size="sm" placeholder="add a question" name="question"
                                     onChange={handleChange} onBlur={handleBlur} value={values.question}
                                     isInvalid={touched.question && !!errors.question} />
 
                                 <Form.Control.Feedback type="invalid">
                                     {errors.question}
                                 </Form.Control.Feedback>
                             </Form.Group>
 
                             <FieldArray name="examples">
                                 {
                                     ({ push, remove }) => (
                                         <React.Fragment>
                                             <div className="d-flex flex-row justify-content-between align-items-center">
                                                 <h6 className="m-0">Examples</h6>
                                                 <Button size="sm" variant="success" onClick={() => push({ sentence: '', answers: [''] })}>New Example</Button>
                                             </div>
 
                                             {
                                                 values.examples.length > 0 && values.examples.map((item: any, i: number) =>
                                                 (
                                                     <div className="rounded border bg-light p-3 mt-3" key={'ex'+i}>
                                                         <div className="d-flex flex-row justify-content-between align-items-center">
                                                             <h6 className="m-0">Example {i + 1}:</h6>
                                                             <Button size="sm" variant="danger" onClick={() => remove(i)}
                                                                 className="rounded-circle d-flex align-items-center align-self-end"
                                                                 style={{ width: '32px', height: '32px' }}>
                                                                 <Trash />
                                                             </Button>
                                                         </div>
                                                         <Form.Group>
                                                             <Form.Label>case {i + 1} (A sentence / A particular Question)</Form.Label>
                                                             <Form.Control autoComplete="off" size="sm" placeholder="Question example" name={`examples.${i}.sentence`}
                                                                 onChange={handleChange} onBlur={handleBlur} value={values.examples[i].sentence}
                                                                 isInvalid={touched.examples && !!errors.examples} />
                                                             <Form.Control.Feedback type="invalid">
                                                                This Field is required
                                                             </Form.Control.Feedback>
                                                         </Form.Group>
 
                                                         <FieldArray name={`examples.${i}.answers`}>
                                                             {
                                                                 (helper) => (
                                                                     <React.Fragment>
                                                                         
                                                                             <div className="d-flex flex-row justify-content-between align-items-center">
                                                                                 <h6 className="m-0">Possible Answers</h6>
                                                                                 <Button size="sm" variant="info" onClick= {() => helper.push('')}>New Answer</Button>
                                                                             </div>
                                                                            { values.examples[i].answers.length > 0 && values.examples[i].answers.map((item: string, j: number) => (
                                                                                 <Form.Group key={'answer'+i+j}>
                                                                                     <Form.Label>
                                                                                         <span>Answer {j + 1}:</span>
                                                                                         <span className="text-secondary ml-2 icons" onClick={()=> helper.remove(j)}>
                                                                                             <Trash />
                                                                                         </span>
                                                                                     </Form.Label>
                                                                                     <Form.Control autoComplete="off" size="sm" placeholder="Enter your answer" name={`examples.${i}.answers.${j}`}
                                                                                         onChange={handleChange} onBlur={handleBlur} value={values.examples[i].answers[j]} />
                                                                                 </Form.Group>
                                                                             ))}
                                                                         
                                                                     </React.Fragment>
                                                                 )
                                                             }
                                                         </FieldArray>
                                                     </div>
                                                 ))
                                             }
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
