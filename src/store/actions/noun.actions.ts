import { ActionForm } from './ActionForm';
import { GET_NOUNS, DELETE_NOUN, UPDATE_NOUN, ADD_NOUN } from './types';

export const getNouns = (payload: any): ActionForm =>{

    return{
        type: GET_NOUNS,
        payload
    }
};

export const addNoun = (payload: any): ActionForm => {

    return{
        type: ADD_NOUN,
        payload
    }
};

export const updateNoun = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_NOUN,
        payload,
        id
    }
};

export const deleteNoun = (id: string): ActionForm => {

    return{
        type: DELETE_NOUN,
        id
    }
};