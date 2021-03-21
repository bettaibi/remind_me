import React, {useEffect} from 'react';
import axios from 'axios';

const linguaApi = "https://lt-nlgservice.herokuapp.com/rest/english/conjugate";
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

    // Conjugate A Verb
    const conjugate = async (verb: string) =>{
        try{
            const res = await axios.get(`${linguaApi}?verb=${verb}`);
            return await res.data;
        }
        catch(err){
            throw err;
        }
    };

    return (
        <main>

        </main>
    )
}
