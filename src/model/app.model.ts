export interface AppState{
    conjugations: any;
    definitions: WordDefinitionForm; 
    user: Profile;
    verbs: any[];
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

export interface CustomResponse{
    success: boolean;
    message: string;
    data?: any;
}

export interface LoginForm{
    email: string;
    password: string;
}

export interface Profile{
    displayName?: string;
    photoURL?: string;
    email: string;
    uid: string;
}