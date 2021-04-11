import { ActionForm } from './ActionForm';
import { GET_ADJECTIVES, DELETE_ADJECTIVE, UPDATE_ADJECTIVE, ADD_ADJECTIVE } from './types';

export const getAdjectives = (payload: any): ActionForm =>{

    return{
        type: GET_ADJECTIVES,
        payload
    }
};

export const addAdjective = (payload: any): ActionForm => {

    return{
        type: ADD_ADJECTIVE,
        payload
    }
};

export const updateAdjective = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_ADJECTIVE,
        payload,
        id
    }
};

export const deleteAdjective = (id: string): ActionForm => {

    return{
        type: DELETE_ADJECTIVE,
        id
    }
};