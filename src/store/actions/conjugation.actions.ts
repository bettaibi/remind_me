import { GET_LAST_VERB_CONJUAGATED } from './types';

export const setLatestConjugatedVerb = (payload: any) =>{
    return {
        type: GET_LAST_VERB_CONJUAGATED,
        payload
    }
}
