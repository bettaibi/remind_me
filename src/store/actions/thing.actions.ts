import { ActionForm } from './ActionForm';
import { GET_THINGS, DELETE_THING, ADD_THING } from './types';

export const getThings = (payload: any): ActionForm =>{

    return{
        type: GET_THINGS,
        payload
    }
};

export const addThing = (payload: any): ActionForm => {

    return{
        type: ADD_THING,
        payload
    }
};

export const deleteThing = (id: string): ActionForm => {

    return{
        type: DELETE_THING,
        id
    }
};