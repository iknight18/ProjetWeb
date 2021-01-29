import { Session } from './session';
export const SESSIONITEMS: Session[] = [
    {
        id: 1,
        name: 'Web',
        track: 'MEAN',
        date: new Date('2018-06-13'),
        duree: 3,
        adress: 'Lyon',
        participants: [1],
        isCompleted: false
    },
    {
        id: 2,
        name: 'Mobile',
        track: 'Ionic',
        date: new Date('2018-08-10'),
        duree: 5,
        adress: 'Paris',
        participants: [1,2],
        isCompleted: false
    },
    {
        id: 3,
        name: 'Web',
        track: 'NodeJS',
        date: new Date('2018-07/20'),
        duree: 5,
        adress: 'Lyon',
        participants: [2,3],
        isCompleted: false
    },
    {
        id: 4,
        name: 'Web',
        track: 'Angular',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: [4,5],
        isCompleted: false
    },
    {
        id: 5,
        name: 'Web',
        track: 'Angular',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: [4,5],
        isCompleted: false
    },
    {
        id: 6,
        name: 'Mobile',
        track: 'Swift',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: [],
        isCompleted: false
    },
    {
        id: 7,
        name: 'Web',
        track: 'Angular',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: [4],
        isCompleted: false
    },
    {
        id: 8,
        name: 'Mobile',
        track: 'Xamarin',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: [4,3],
        isCompleted: false
    },
];