import { ADD_TASK, GET_TODOS_SUCCESS, GET_TODOS_STARTED, GET_TODOS_FAILURE } from "../actions";
import { ITask } from "../../../mock-data/todos";
import axios from "axios";
import { ActionCreator, Dispatch } from "redux";

export interface IError {
    code: number;
    message: string;
}

export interface IAxiosResponse {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

interface IGetTodosSuccessAction {
    type: typeof GET_TODOS_SUCCESS,
    payload: ITask[]
}

interface IGetTodosStartedAction {
    type: typeof GET_TODOS_STARTED,
    payload: {}
}

interface IGetTodosFailureAction {
    type: typeof GET_TODOS_FAILURE,
    payload: {
        error: IError
    }
}

export type TTaskActionTypes =
    IAddTaskAction
    | IGetTodosSuccessAction
    | IGetTodosStartedAction
    | IGetTodosFailureAction; // объединение экшнов, относящихся
// к одной логической области

export const addTask: ActionCreator<TTaskActionTypes> = (task: ITask) => {
    return {
        type: ADD_TASK,
        payload: {
            ...task
        }
    }
}

export const getTodos = () => {
    return (dispatch: Dispatch<TTaskActionTypes>) => {
        dispatch(getTodosStarted()); // диспатчится обычный синхронный экшн, который означает
        // начало отправки запроса на сервер

        axios
            .get<IAxiosResponse[]>(`https://jsonplaceholder.typicode.com/todos`)
            // fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                // {
                //     id: number;
                //     completed: boolean;
                //     title: string;
                //     userId: number;
                // }
                // -->
                // {
                //     id: number,
                //     text: string,
                //     isCompleted
                // }

                const mappedResponse = res.data.map(item => ({ id: item.id, isCompleted: item.completed, text: item.title }));
                setTimeout(() => {
                    dispatch(getTodosSuccess(mappedResponse));
                }, 3000);
            })
            .catch(err => {
                setTimeout(() => {
                    dispatch(getTodosFailure(err));
                }, 3000);
            });
    };
};

const getTodosSuccess: ActionCreator<TTaskActionTypes> = (todos: ITask[]) => ({
    type: GET_TODOS_SUCCESS,
    payload: [
        ...todos
    ]
});

const getTodosStarted: ActionCreator<TTaskActionTypes> = () => ({
    type: GET_TODOS_STARTED,
    payload: {}
});

const getTodosFailure: ActionCreator<TTaskActionTypes> = (error: IError) => ({
    type: GET_TODOS_FAILURE,
    payload: {
        error
    }
});
