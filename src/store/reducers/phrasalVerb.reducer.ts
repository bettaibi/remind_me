import { PhrasalModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_PHRASALVERBS, ADD_PHRASALVERB, DELETE_PHRASALVERB, UPDATE_PHRASALVERB } from '../actions/types';

const PhrasalVerbReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_PHRASALVERBS:
            return [...action.payload];
        case ADD_PHRASALVERB:
            return [action.payload, ...state];
        case DELETE_PHRASALVERB:
            return [...state.filter((item: PhrasalModel) => item.id === action.id)];
        case UPDATE_PHRASALVERB:
            return [...state.map((item: PhrasalModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default PhrasalVerbReducer;