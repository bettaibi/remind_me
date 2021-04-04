import ConjugationReducer from './reducers/conjugation.reducer';
import DefinitionReducer from './reducers/definition.reducer';
import UserReducer from './reducers/user.reducer';
import VerbReducer from './reducers/verb.reducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
    definitions: DefinitionReducer,
    conjugations: ConjugationReducer,
    user: UserReducer,
    verbs: VerbReducer,
});

export default appReducer;