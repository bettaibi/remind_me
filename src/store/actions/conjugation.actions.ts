import { ActionForm } from './ActionForm';
import { GET_LAST_VERB_CONJUAGATED } from './types';

export const setLatestConjugatedVerb = (payload: any): ActionForm =>{
    return {
        type: GET_LAST_VERB_CONJUAGATED,
        payload
    }
}
