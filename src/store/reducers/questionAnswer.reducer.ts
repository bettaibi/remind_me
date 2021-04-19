import { QAModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_QA, ADD_QA, DELETE_QA, UPDATE_QA } from '../actions/types';

const QAReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_QA:
            return [...action.payload];
        case ADD_QA:
            return [action.payload, ...state];
        case DELETE_QA:
            return [...state.filter((item: QAModel) => item.id !== action.id)];
        case UPDATE_QA:
            return [...state.map((item: QAModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default QAReducer;