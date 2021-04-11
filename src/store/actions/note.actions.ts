import { ActionForm } from './ActionForm';
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, GET_NOTES } from './types';

export const getNotes = (payload: any): ActionForm =>{

    return{
        type: GET_NOTES,
        payload
    }
};

export const addNote = (payload: any): ActionForm => {

    return{
        type: ADD_NOTE,
        payload
    }
};

export const updateNote = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_NOTE,
        payload,
        id
    }
};

export const deleteNote = (id: string): ActionForm => {

    return{
        type: DELETE_NOTE,
        id
    }
};