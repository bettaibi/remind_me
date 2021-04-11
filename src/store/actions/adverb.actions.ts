import { ActionForm } from './ActionForm';
import { GET_ADVERBS, DELETE_ADVERB, UPDATE_ADVERB, ADD_ADVERB } from './types';

export const getAdverbs = (payload: any): ActionForm =>{

    return{
        type: GET_ADVERBS,
        payload
    }
};

export const addAdverb = (payload: any): ActionForm => {

    return{
        type: ADD_ADVERB,
        payload
    }
};

export const updateAdverb = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_ADVERB,
        payload,
        id
    }
};

export const deleteAdverb = (id: string): ActionForm => {

    return{
        type: DELETE_ADVERB,
        id
    }
};