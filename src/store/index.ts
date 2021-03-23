import ConjugationReducer from './reducers/conjugation.reducer';
import DefinitionReducer from './reducers/definition.reducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
    definitions: DefinitionReducer,
    conjugations: ConjugationReducer
});

export default appReducer;