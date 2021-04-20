import { TodosModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/types';

const TodosReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_TODOS:
            return [...action.payload];
        case ADD_TODO:
            return [action.payload, ...state];
        case DELETE_TODO:
            return [...state.filter((item: TodosModel) => item.id !== action.id)];
        case UPDATE_TODO:
            return [...state.map((item: TodosModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default TodosReducer;