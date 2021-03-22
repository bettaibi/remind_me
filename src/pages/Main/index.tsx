import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';
import { GrammarSearch } from './GrammarSearch';
import { WordDefinition } from './wordDefinition';
import { MyProgress } from './MyProgress';
import { Games } from './Games';

const definitionApi = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const Main: React.FC = () => {


    useEffect(() => {
    //   conjugate("eat").then((data)=>{
    //       console.log(data)
    //   });

    // wordDefinition("Criminal").then((data: any)=>{
    //     console.log(data)
    // });
        
    }, []);

    // Get Definition
    const wordDefinition = async (word: string) => {
        try{
            const res = await axios.get(`${definitionApi}/${word}`);
            return res.data;
        }
        catch(err){
            throw err;
        }
    };


    return (
        <main>
            <Switch>
                <Route path="/home" component={MyProgress} exact/>
                <Route path="/home/grammar-search" component={GrammarSearch} />
                <Route path="/home/word-definition" component={WordDefinition} />
                <Route path="/home/games" component={Games} />
            </Switch>
        </main>
    )
}
