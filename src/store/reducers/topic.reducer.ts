import { TopicModel } from '../../model/app.model';
import { ActionForm } from '../actions/ActionForm';
import { GET_TOPICS, ADD_TOPIC, DELETE_TOPIC, UPDATE_TOPIC } from '../actions/types';

const TopicReducer = (state = [], action: ActionForm) => {
    switch(action.type){
        case GET_TOPICS:
            return [...action.payload];
        case ADD_TOPIC:
            return [action.payload, ...state];
        case DELETE_TOPIC:
            return [...state.filter((item: TopicModel) => item.id === action.id)];
        case UPDATE_TOPIC:
            return [...state.map((item: TopicModel)=> item.id !== action.id? item: action.payload)];
        default: return state;
    }
};

export default TopicReducer;