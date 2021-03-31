import { ActionForm } from './ActionForm';
import { GET_VERBS, ADD_VERB, UPDATE_VERB, DELETE_VERB } from './types';

export const getVerbs = (payload: any): ActionForm =>{

    return{
        type: GET_VERBS,
        payload
    }
};

export const addVerb = (payload: any): ActionForm => {

    return{
        type: ADD_VERB,
        payload
    }
};

export const updateVerb = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_VERB,
        payload,
        id
    }
};

export const deleteVerb = (id: string): ActionForm => {

    return{
        type: DELETE_VERB,
        id
    }
};