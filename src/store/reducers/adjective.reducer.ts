import { AdjectiveModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_ADJECTIVES, ADD_ADJECTIVE, DELETE_ADJECTIVE, UPDATE_ADJECTIVE } from '../actions/types';

const AdjectiveReducer = (state = [], action: ActionForm) => {

    switch(action.type){
        case GET_ADJECTIVES:
            return [...action.payload];
        case ADD_ADJECTIVE:
            return [action.payload, ...state];
        case DELETE_ADJECTIVE:
            return [...state.filter((item: AdjectiveModel) => item.id !== action.id)];
        case UPDATE_ADJECTIVE:
            return [...state.map((item: AdjectiveModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default AdjectiveReducer;