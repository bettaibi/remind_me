import { NounModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_NOUNS, ADD_NOUN, DELETE_NOUN, UPDATE_NOUN } from '../actions/types';

const NounReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_NOUNS:
            return [...action.payload];
        case ADD_NOUN:
            return [action.payload, ...state];
        case DELETE_NOUN:
            return [...state.filter((item: NounModel) => item.id === action.id)];
        case UPDATE_NOUN:
            return [...state.map((item: NounModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default NounReducer;