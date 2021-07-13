import { 
    Book, 
    Gear, 
    ClipboardCheck, 
    CardChecklist, 
    JournalBookmark, 
    JournalCheck,
    Stickies,
    PencilSquare,
    QuestionOctagon

} from 'react-bootstrap-icons';
import { v4 } from 'uuid';

interface SubItemsNavigation{
    id: string;
    title: string;
    path: string;
}

export interface Navigation{
    id: string;
    title: string;
    icon: any,
    path?: string;
    subItems?: SubItemsNavigation[];
}

export const navigations: Navigation[] = [
    {id: v4(), title: 'Words Managment', icon: <Book />, subItems: [
        {id: v4(), title: 'Verbs', path: '/home/words/verbs'},
        {id: v4(),title: 'Nouns', path: '/home/words/nouns'},
        {id: v4(),title: 'Adjectives', path: '/home/words/adjectives'},
        {id: v4(),title: 'Adverbs', path: '/home/words/adverbs'},
        {id: v4(),title: 'English Linkers', path: '/home/words/linkers'},
        {id: v4(),title: 'Phrasal Verbs', path: '/home/words/phrasal-verbs'},
    ]},

    {id: v4(), title: 'Phrases & Idioms', icon: <Stickies />, path: '/home/idioms'},

    {id: v4(), title: 'English Topics', icon: <JournalBookmark />, path: '/home/topics'},
    {id: v4(), title: 'English Grammar Notes', icon: <JournalCheck />, path: '/home/notes'},
    {id: v4(), title: 'English Tenses Practise', icon: <PencilSquare />, path: '/home/tenses'},
    {id: v4(), title: 'Q&A', icon: <QuestionOctagon />, path: '/home/QA'},
    
    {id: v4(), title: 'Definition & Synonyms', icon: <ClipboardCheck />, path: '/home/word-definition'},
    {id: v4(), title: 'Conjugation & Grammar', icon: <CardChecklist />, path: '/home/grammar-search'},

    {id: v4(), title: 'Settings', icon: <Gear />, subItems: [
        {id: v4(), title: 'Voice Assistance', path: '/home/voice-assistance'},
        {id: v4(), title: 'Account Setting', path: '/home/profile'}
    ]},
];

