import { ActionForm } from './ActionForm';
import { GET_TOPICS, DELETE_TOPIC, UPDATE_TOPIC, ADD_TOPIC } from './types';

export const getTopics = (payload: any): ActionForm =>{

    return{
        type: GET_TOPICS,
        payload
    }
};

export const addTopic = (payload: any): ActionForm => {

    return{
        type: ADD_TOPIC,
        payload
    }
};

export const updateTopic = (id: string, payload: any): ActionForm => {

    return{
        type: UPDATE_TOPIC,
        payload,
        id
    }
};

export const deleteTopic = (id: string): ActionForm => {

    return{
        type: DELETE_TOPIC,
        id
    }
};