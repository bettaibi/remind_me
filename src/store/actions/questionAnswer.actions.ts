import { ActionForm } from './ActionForm';
import { GET_QA, DELETE_QA, UPDATE_QA, ADD_QA } from './types';

export const getQA = (payload: any): ActionForm =>{

    return{
        type: GET_QA,
        payload
    }
};

export const addQA = (payload: any): ActionForm => {

    return{
        type: ADD_QA,
        payload
    }
};

export const updateQA = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_QA,
        payload,
        id
    }
};

export const deleteQA = (id: string): ActionForm => {

    return{
        type: DELETE_QA,
        id
    }
};