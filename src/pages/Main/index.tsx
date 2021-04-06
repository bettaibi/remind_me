import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GrammarSearch } from './GrammarSearch';
import { WordDefinition } from './wordDefinition';
import { MyProgress } from './MyProgress';
import { Games } from './Games';
import { VoiceAssistance } from './VoiceAssistance';
import { Verbs } from './words/Verbs';
import { Adverbs } from './words/Adverbs';
import { Adjectives } from './words/Adjectives';
import { Nouns } from './words/Nouns';
import { Linkers } from './words/Linkers';
import { PhrasalVerbs } from './words/PhrasalVerbs';
import { Idioms } from './Idioms';
import { ListOfThings } from './things/ListOfThings';
import { NewThings } from './things/NewThings';
import { Topics } from './Topics';


export const Main: React.FC = () => {

    return (
        <main>
            <Switch>
                <Route path="/home" component={MyProgress} exact/>
                <Route path="/home/grammar-search" component={GrammarSearch} />
                <Route path="/home/word-definition" component={WordDefinition} />
                <Route path="/home/games" component={Games} />
                <Route path="/home/voice-assistance" component={VoiceAssistance} />
                <Route path="/home/words/verbs" component={Verbs}/>
                <Route path="/home/words/adverbs" component={Adverbs}/>
                <Route path="/home/words/adjectives" component={Adjectives}/>
                <Route path="/home/words/nouns" component={Nouns}/>
                <Route path="/home/words/linkers" component={Linkers}/>
                <Route path="/home/words/phrasal-verbs" component={PhrasalVerbs}/>
                <Route path="/home/idioms" component = {Idioms} />
                <Route path="/home/things/list" component = {ListOfThings} />
                <Route path="/home/things/new" component = {NewThings} />
                <Route path = "/home/topics" component = {Topics} />

            </Switch>
        </main>
    )
}
