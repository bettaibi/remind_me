import { AdverbModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_ADVERBS, ADD_ADVERB, DELETE_ADVERB, UPDATE_ADVERB } from '../actions/types';

const AdverbReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_ADVERBS:
            return [...action.payload];
        case ADD_ADVERB:
            return [action.payload, ...state];
        case DELETE_ADVERB:
            return [...state.filter((item: AdverbModel) => item.id !== action.id)];
        case UPDATE_ADVERB:
            return [...state.map((item: AdverbModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default AdverbReducer;