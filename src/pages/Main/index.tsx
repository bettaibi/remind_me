import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import WordsLoadingPage from './words/shared/WordsLoadingPage';

const GrammarSearch = lazy(() => import('./GrammarSearch'));
const WordDefinition = lazy(() => import('./wordDefinition'));
const VoiceAssistance = lazy(() => import('./VoiceAssistance'));
const MyProgress = lazy(() => import('./MyProgress'));
const TensePractise = lazy(() => import('./TensePractise'));

const Games = lazy(() => import('./Games'));
const Topics = lazy(() => import('./Topics'));
const Notes = lazy(() => import('./Notes'));
const Idioms = lazy(() => import('./Idioms'));
const Verbs = lazy(() => import('./words/Verbs'));
const Nouns = lazy(() => import('./words/Nouns'));
const Linkers = lazy(() => import('./words/Linkers'));
const Adverbs = lazy(() => import('./words/Adverbs'));
const Adjectives = lazy(() => import('./words/Adjectives'));
const PhrasalVerbs = lazy(() => import('./words/PhrasalVerbs'));
const Profile = lazy(() => import('./Profile'));
const QuestionAnswer = lazy(() => import('./QuestionAnswer'));
const Todos = lazy(() => import('./Todos'));

const Main: React.FC = () => {

    return (
        <main>
            <Suspense fallback={<WordsLoadingPage />}>
                <Switch>
                    <Route path="/home" component={MyProgress} exact={true} />
                    <Route path="/home/grammar-search" component={GrammarSearch} />
                    <Route path="/home/word-definition" component={WordDefinition} />
                    <Route path="/home/games" component={Games} />
                    <Route path="/home/voice-assistance" component={VoiceAssistance} />
                    <Route path="/home/words/verbs" component={Verbs} />
                    <Route path="/home/words/adverbs" component={Adverbs} />
                    <Route path="/home/words/adjectives" component={Adjectives} />
                    <Route path="/home/words/nouns" component={Nouns} />
                    <Route path="/home/words/linkers" component={Linkers} />
                    <Route path="/home/words/phrasal-verbs" component={PhrasalVerbs} />
                    <Route path="/home/idioms" component={Idioms} />
                    <Route path="/home/topics" component={Topics} />
                    <Route path="/home/notes" component={Notes} />
                    <Route path="/home/tenses" component={TensePractise} />
                    <Route path="/home/profile" component={Profile} />
                    <Route path="/home/QA" component= {QuestionAnswer} />
                    <Route path="/home/todos" component = {Todos} />
                </Switch>
            </Suspense>
        </main>
    )
}

export default Main;
