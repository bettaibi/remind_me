import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GrammarSearch } from './GrammarSearch';
import { WordDefinition } from './wordDefinition';
import { MyProgress } from './MyProgress';
import { Games } from './Games';
import { VoiceAssistance } from './VoiceAssistance';


export const Main: React.FC = () => {


    return (
        <main>
            <Switch>
                <Route path="/home" component={MyProgress} exact/>
                <Route path="/home/grammar-search" component={GrammarSearch} />
                <Route path="/home/word-definition" component={WordDefinition} />
                <Route path="/home/games" component={Games} />
                <Route path="/home/voice-assistance" component={VoiceAssistance} />
            </Switch>
        </main>
    )
}
