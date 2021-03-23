import { GET_LAST_SEARCHED_DEFINITION } from './types';

export const updateDefinition = (payload: any) => {
    return {
        type: GET_LAST_SEARCHED_DEFINITION,
        payload
    }
}