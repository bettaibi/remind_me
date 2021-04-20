import { ActionForm } from './ActionForm';
import { GET_TODOS, DELETE_TODO, UPDATE_TODO, ADD_TODO } from './types';

export const getTodos = (payload: any): ActionForm =>{

    return{
        type: GET_TODOS,
        payload
    }
};

export const addTodo = (payload: any): ActionForm => {

    return{
        type: ADD_TODO,
        payload
    }
};

export const updateTodo = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_TODO,
        payload,
        id
    }
};

export const deleteTodo = (id: string): ActionForm => {

    return{
        type: DELETE_TODO,
        id
    }
};