interface IPosition {
    id: string;
    title: string;
    value: string;
}

export const POSITIONS: IPosition[] = [
    {
        id: 'fe',
        title: 'front-end',
        value: 'front-end',
    },
    {
        id: 'be',
        title: 'back-end',
        value: 'back-end',
    },
    {
        id: 'fs',
        title: 'full-stack',
        value: 'full-stack',
    },
]
