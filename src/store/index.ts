import ConjugationReducer from './reducers/conjugation.reducer';
import DefinitionReducer from './reducers/definition.reducer';
import UserReducer from './reducers/user.reducer';
import VerbReducer from './reducers/verb.reducer';
import NounReducer from './reducers/noun.reducer';
import AdjectiveReducer from './reducers/adjective.reducer';
import AdverbReducer from './reducers/adverb.reducer';
import PhrasalVerbReducer from './reducers/phrasalVerb.reducer';
import LinkerReducer from './reducers/linker.reducer';
import TopicReducer from './reducers/topic.reducer';
import NoteReducer from './reducers/note.reducer';
import IdiomReducer from './reducers/idiom.reducer';
import ThingReducer from './reducers/thing.reducer';
import TenseReducer from './reducers/tense.reducer';
import QAReducer from './reducers/questionAnswer.reducer';
import TodosReducer from './reducers/todos.reducers';

import { combineReducers } from 'redux';

const appReducer = combineReducers({

    definitions: DefinitionReducer,
    conjugations: ConjugationReducer,
    user: UserReducer,
    verbs: VerbReducer,
    nouns: NounReducer,
    adjectives: AdjectiveReducer,
    adverbs: AdverbReducer,
    phrasalVerbs: PhrasalVerbReducer,
    linkers: LinkerReducer,
    topics: TopicReducer,
    notes: NoteReducer,
    idioms: IdiomReducer,
    things: ThingReducer,
    tenses: TenseReducer,
    questionAndAnswers: QAReducer,
    todos: TodosReducer
});

export default appReducer;