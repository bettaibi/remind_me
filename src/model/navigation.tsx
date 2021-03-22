import { Book, Gear, ClipboardCheck, CardChecklist } from 'react-bootstrap-icons';
// @ts-ignore
import { v4 } from 'uuid';

interface SubItemsNavigation{
    id: string;
    title: string;
    path: string;
}

export interface Navigation{
    id: number;
    title: string;
    icon: any,
    path?: string;
    subItems?: SubItemsNavigation[];
}

export const navigations: Navigation[] = [
    {id: v4(), title: 'Database Managment', icon: <Book />, subItems: [
        {id: v4(), title: 'My Words', path: '/word'},
        {id: v4(),title: 'New Vacab', path: '/word'},
        {id: v4(),title: 'New Game', path: '/word'}
    ]},
    {id: v4(), title: 'Definition & Synonyms', icon: <ClipboardCheck />, path: '/home/word-definition'},
    {id: v4(), title: 'Conjugation & Grammar', icon: <CardChecklist />, path: '/home/grammar-search'},

    {id: v4(), title: 'Settings', icon: <Gear />, subItems: [
        {id: v4(), title: 'Notification', path: '/word'},
        {id: v4(), title: 'Account', path: '/word'},
        {id: v4(), title: 'App Theme', path: '/word'}
    ]},
];

