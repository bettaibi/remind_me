import { ActionForm } from '../actions/ActionForm';
import { GET_LAST_SEARCHED_DEFINITION } from '../actions/types';

const DefinitionReducer = (state = null, action: ActionForm) =>{
    switch (action.type){
        case GET_LAST_SEARCHED_DEFINITION:
            return {...action.payload};
        default:
            return state;
    }
};


export default DefinitionReducer;