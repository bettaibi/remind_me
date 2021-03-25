import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from "./types";
import { ActionForm } from './ActionForm';

export const getUserProfile = (): ActionForm => {

    return{
        type: GET_USER_PROFILE,
    }
};

export const updateUserProfile = (payload: any): ActionForm =>{

    return{
        type: UPDATE_USER_PROFILE,
        payload
    }
};