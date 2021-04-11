import { ActionForm } from './ActionForm';
import { GET_IDIOMS, DELETE_IDIOM, UPDATE_IDIOM, ADD_IDIOM } from './types';

export const getIdioms = (payload: any): ActionForm =>{

    return{
        type: GET_IDIOMS,
        payload
    }
};

export const addIdiom = (payload: any): ActionForm => {

    return{
        type: ADD_IDIOM,
        payload
    }
};

export const updateIdiom = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_IDIOM,
        payload,
        id
    }
};

export const deleteIdiom = (id: string): ActionForm => {

    return{
        type: DELETE_IDIOM,
        id
    }
};