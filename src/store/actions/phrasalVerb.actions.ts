import { ActionForm } from './ActionForm';
import { GET_PHRASALVERBS, DELETE_PHRASALVERB, UPDATE_PHRASALVERB, ADD_PHRASALVERB } from './types';

export const getPhrasalVerbs = (payload: any): ActionForm =>{

    return{
        type: GET_PHRASALVERBS,
        payload
    }
};

export const addPhrasalVerb = (payload: any): ActionForm => {

    return{
        type: ADD_PHRASALVERB,
        payload
    }
};

export const updatePhrasalVerb = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_PHRASALVERB,
        payload,
        id
    }
};

export const deletePhrasalVerb = (id: string): ActionForm => {

    return{
        type: DELETE_PHRASALVERB,
        id
    }
};