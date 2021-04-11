import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from "./types";
import { ActionForm } from './ActionForm';
import { Profile } from "../../model/app.model";

export const getUserProfile = (): ActionForm => {

    return{
        type: GET_USER_PROFILE,
    }
};

export const updateUserProfile = (payload: Profile): ActionForm => {

    return{
        type: UPDATE_USER_PROFILE,
        payload
    }
};