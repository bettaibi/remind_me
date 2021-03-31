import { ActionForm } from '../actions/ActionForm';
import { GET_VERBS, ADD_VERB, DELETE_VERB, UPDATE_VERB } from '../actions/types';

const VerbReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_VERBS:
            return [...action.payload];
        case ADD_VERB:
            return [action.payload, ...state];
        case DELETE_VERB:
            return [...state.filter((item: any) => item.id === action.id)];
        case UPDATE_VERB:
            return [...state.map((item: any)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default VerbReducer;