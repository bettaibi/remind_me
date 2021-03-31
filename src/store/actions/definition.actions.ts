import { ActionForm } from './ActionForm';
import { GET_LAST_SEARCHED_DEFINITION } from './types';

export const updateDefinition = (payload: any): ActionForm => {
    return {
        type: GET_LAST_SEARCHED_DEFINITION,
        payload
    }
}