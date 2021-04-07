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

// VERB FORM
export interface VerbModal{
    label: string;
    past: string;
    pastParticipal: string;
    definition: string;
    examples: string[];
    conjugation: Conjugation[];
    synonyms: string[];
    category: string;
    translation: string;
    spelling: string;
}

interface Conjugation{
    tense: string;
    content: Tense[];
}

interface Tense{
    subject: string;
    value: string;
}

// Noun Form
export interface NounModel{
    label: string;
    translation: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    spelling: string;
}

// Adjectve From
export interface AdjectiveModel{
    label: string;
    comparative: string;
    superlative: string;
    translation: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    spelling: string;
}

// Adverb From
export interface AdverbModel{
    label: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    translation: string;
    spelling: string;
}

// Pharsal Verb
export interface PhrasalModel{
    label: string;
    definition: string;
    examples: string[];
    translation: string;
    spelling: string;
}

// English linkers
export interface LinkersModel{
    label: string;
    definition: string;
    examples: string[];
    translation: string;
    synonyms: string[];
    spelling: string;
}

export interface PicThingsModel{
    picture: string;
    label: string;
    things: ThingModel[];
}

export interface ThingModel{
    name: string;
    translation: string;
    utility: string;
}

export interface IdiomsModel{
    label: string;
    explication: string;
}

export interface TopicModel{
    label: string;
    vocabs: VocabularyModal[];
    paragraph: string;
}

export interface VocabularyModal{
    name: string;
    definition: string;
    example: string;
}

export interface GrammarNotesModel{
    label: string;
    note: string;
    question: string;
    examples: NoteExamples[];
}

interface NoteExamples{
    sentence: string;
    answers: string[];
}

export interface TensePracticeModel{
    sentences: SentenseModal[];
    label: string;
}

interface SentenseModal{
    tense: string;
    sentence: string;
}
