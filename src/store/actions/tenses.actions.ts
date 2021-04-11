import { ActionForm } from './ActionForm';
import { GET_TENSES, DELETE_TENSE, UPDATE_TENSE, ADD_TENSE } from './types';

export const getTenses = (payload: any): ActionForm =>{

    return{
        type: GET_TENSES,
        payload
    }
};

export const addTense = (payload: any): ActionForm => {

    return{
        type: ADD_TENSE,
        payload
    }
};

export const updateTense = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_TENSE,
        payload,
        id
    }
};

export const deleteTense = (id: string): ActionForm => {

    return{
        type: DELETE_TENSE,
        id
    }
};