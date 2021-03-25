import { Profile } from "../../model/app.model";
import { ActionForm } from "../actions/ActionForm";
import { UPDATE_USER_PROFILE, GET_USER_PROFILE } from '../actions/types';

const UserProfile: Profile = {
    email: '',
    uid: '',
    displayName: '',
    photoURL: ''
};

const UserReducer = (state = UserProfile, action: ActionForm) => {
    switch(action.type){
        case GET_USER_PROFILE:
            return {...state};
        case UPDATE_USER_PROFILE: 
            return {...action.payload};
        default:
            return state;
    };
};

export default UserReducer;