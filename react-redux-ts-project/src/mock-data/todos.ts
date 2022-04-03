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

export const TASKS: ITask[] = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    }
];
