import { ActionForm } from "../actions/ActionForm";
import { GET_LAST_VERB_CONJUAGATED } from '../actions/types';

const ConjugationReducer = (state = null, action: ActionForm) =>{
    switch(action.type){
        case GET_LAST_VERB_CONJUAGATED:
            return {...action.payload};
        default: 
        return state;
    }
};

export default ConjugationReducer;