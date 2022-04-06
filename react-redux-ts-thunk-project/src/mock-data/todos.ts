export interface IFilterBtn {
    text: string;
    id: string;
}

export const FILTERS_BTN: IFilterBtn[] = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

export interface ITask {
    id: number;
    text: string;
    isCompleted: boolean;
}

