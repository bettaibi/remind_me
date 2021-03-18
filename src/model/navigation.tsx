import { Book, Gear } from 'react-bootstrap-icons';

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
    {id: 1, title: 'Words Managment', icon: <Book />, subItems: [
        {id: '1.1', title: 'New Word', path: '/word'},
        {id: '1.2',title: 'New Vacab', path: '/word'},
        {id: '1.3',title: 'New Game', path: '/word'}
    ]},
    {id: 2, title: 'Settings', icon: <Gear />, subItems: [
        {id: '2.1', title: 'Notification', path: '/word'},
        {id: '2.2', title: 'Account', path: '/word'},
        {id: '2.3', title: 'New Game', path: '/word'}
    ]},
    {id: 3, title: 'Words Managment', icon: <Book />},
];

