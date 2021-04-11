export interface AppState{
    conjugations: any;
    definitions: WordDefinitionForm; 
    user: Profile;
    verbs: VerbModal[];
    nouns: NounModel[];
    adjectives: AdjectiveModel[];
    adverbs: AdverbModel[];
    linkers: LinkersModel[];
    phrasalVerbs: PhrasalModel[];
    topics: TopicModel[];
    tenses: TensePracticeModel[];
    notes: GrammarNotesModel[];
    things: ThingModel[];
    idioms: IdiomsModel[];
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
    id?: string;
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
    id?: string;
    label: string;
    translation: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    spelling: string;
}

// Adjectve From
export interface AdjectiveModel{
    id?: string;
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
    id?: string;
    label: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    translation: string;
    spelling: string;
}

// Pharsal Verb
export interface PhrasalModel{
    id?: string;
    label: string;
    definition: string;
    examples: string[];
    translation: string;
    spelling: string;
}

// English linkers
export interface LinkersModel{
    id?: string;
    label: string;
    definition: string;
    examples: string[];
    translation: string;
    synonyms: string[];
    spelling: string;
}

export interface PicThingsModel{
    id?: string;
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
    id?: string;
    label: string;
    explication: string;
}

export interface TopicModel{
    id?: string;
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
    id?: string;
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
    id?: string;
    sentences: SentenseModal[];
    label: string;
}

interface SentenseModal{
    tense: string;
    sentence: string;
}
