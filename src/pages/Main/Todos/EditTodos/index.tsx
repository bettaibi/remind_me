import React from 'react';
import { CustomResponse, TodosModel } from '../../../../model/app.model';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { useSharedContext } from '../../../../Context';
import { updateTodo } from '../../../../store/actions/todos.actions';

const schema = yup.object().shape({
    label: yup.string().required('This field is required')
});

interface commonProps{
    handleToogle: () => void;
    showMsg: (title: string, msg: string, type?: any) => void;
    findOneAndUpdate: (obj: any, id: string) => Promise<CustomResponse>;
    word: TodosModel
}
export const EditTodo: React.FC<commonProps> = ({handleToogle, findOneAndUpdate, showMsg, word}) => {
    const { dispatch } = useSharedContext();

    const INITIAL_VALUE: TodosModel = {
       ...word
    }

    const update = async (values: TodosModel) => { 
        try{
            const id = word.id || '';
            const res = await findOneAndUpdate(values, id);
            if(res.success){
                showMsg('Todo updated', res.message);
                dispatch(updateTodo(id, values));
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
    
    return (
        <Formik initialValues={INITIAL_VALUE} onSubmit={(value) => update(value)} validationSchema={schema}>
            {
                ({ handleBlur, handleChange, handleSubmit, errors, touched, values }) => (
                    <Form onSubmit={handleSubmit}>

                            <Form.Group>
                                <Form.Label>
                                   label
                                </Form.Label>
                                <Form.Control placeholder="Write something..." autoComplete="off" name="label" size="sm"
                                    onChange={handleChange} onBlur={handleBlur} value={values.label}
                                    isInvalid={touched.label && !!errors.label}
                                ></Form.Control>

                                <Form.Control.Feedback type="invalid">
                                    {errors.label}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="let me explain" size="sm" autoComplete="off" name="description"
                                    onChange={handleChange} onBlur={handleBlur} value={values.description}
                                ></Form.Control>
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
