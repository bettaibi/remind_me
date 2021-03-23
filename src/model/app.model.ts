export interface AppState{
    assistanceVoice?: any;
    conjugations: any;
    definitions: WordDefinitionForm; 
}

export interface WordDefinitionForm{
    meanings: MeaningsForm[];
    phonetics: any[];
    word?: string;
}

export interface DefinitionForm{
    definition: string;
    example?: string;
    synonyms?: string[];
}

export interface MeaningsForm{
    partOfSpeech?: string;
    definitions: DefinitionForm[];
}