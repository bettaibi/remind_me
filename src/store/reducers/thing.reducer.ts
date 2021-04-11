import { NounModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_THINGS, ADD_THING, DELETE_THING } from '../actions/types';

const ThingReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_THINGS:
            return [...action.payload];
        case ADD_THING:
            return [action.payload, ...state];
        case DELETE_THING:
            return [...state.filter((item: NounModel) => item.id === action.id)];
        default: return state;
    }
};

export default ThingReducer;