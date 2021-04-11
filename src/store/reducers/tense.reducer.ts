import { TensePracticeModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_TENSES, ADD_TENSE, DELETE_TENSE, UPDATE_TENSE } from '../actions/types';

const TenseReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_TENSES:
            return [...action.payload];
        case ADD_TENSE:
            return [action.payload, ...state];
        case DELETE_TENSE:
            return [...state.filter((item: TensePracticeModel) => item.id === action.id)];
        case UPDATE_TENSE:
            return [...state.map((item: TensePracticeModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default TenseReducer;