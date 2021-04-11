import { LinkersModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_LINKERS, ADD_LINKER, DELETE_LINKER, UPDATE_LINKER } from '../actions/types';

const LinkerReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_LINKERS:
            return [...action.payload];
        case ADD_LINKER:
            return [action.payload, ...state];
        case DELETE_LINKER:
            return [...state.filter((item: LinkersModel) => item.id === action.id)];
        case UPDATE_LINKER:
            return [...state.map((item: LinkersModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default LinkerReducer;