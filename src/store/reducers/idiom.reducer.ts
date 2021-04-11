import { IdiomsModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_IDIOMS, ADD_IDIOM, DELETE_IDIOM, UPDATE_IDIOM } from '../actions/types';

const IdiomReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_IDIOMS:
            return [...action.payload];
        case ADD_IDIOM:
            return [action.payload, ...state];
        case DELETE_IDIOM:
            return [...state.filter((item: IdiomsModel) => item.id === action.id)];
        case UPDATE_IDIOM:
            return [...state.map((item: IdiomsModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default IdiomReducer;