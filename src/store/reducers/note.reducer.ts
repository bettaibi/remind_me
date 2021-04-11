import { GrammarNotesModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/types';

const NoteReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_NOTES:
            return [...action.payload];
        case ADD_NOTE:
            return [action.payload, ...state];
        case DELETE_NOTE:
            return [...state.filter((item: GrammarNotesModel) => item.id === action.id)];
        case UPDATE_NOTE:
            return [...state.map((item: GrammarNotesModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default NoteReducer;