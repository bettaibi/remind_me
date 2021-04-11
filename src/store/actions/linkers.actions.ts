import { ActionForm } from './ActionForm';
import { GET_LINKERS, DELETE_LINKER, UPDATE_LINKER, ADD_LINKER } from './types';

export const getLinkers = (payload: any): ActionForm => {

    return{
        type: GET_LINKERS,
        payload
    }
};

export const addLinker = (payload: any): ActionForm => {

    return{
        type: ADD_LINKER,
        payload
    }
};

export const updateLinker = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_LINKER,
        payload,
        id
    }
};

export const deleteLinker = (id: string): ActionForm => {

    return{
        type: DELETE_LINKER,
        id
    }
};