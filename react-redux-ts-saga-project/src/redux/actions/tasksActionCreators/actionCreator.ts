import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK, ADD_ASYNC_TASK, GET_TODOS_SUCCESS, GET_TODOS_STARTED, GET_TODOS_FAILURE } from "../actions";
import { ITask } from "../../../mock-data/todos";
import { ActionCreator } from "redux";
import { IAxiosResponse } from "../../sagas/tasksSagas/tasksSagas";

export interface IError {
    code: number;
    message: string;
}

export interface ITaskIdentifier {
    id: number;
}

export interface IRequestError {
    error: IError
}

interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: ITaskIdentifier;
}

interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK;
    payload: ITaskIdentifier
}

interface IAddAsyncTaskAction {
    type: typeof ADD_ASYNC_TASK;
    payload: {};
}

interface IGetTodosSuccessAction {
    type: typeof GET_TODOS_SUCCESS,
    payload: IAxiosResponse[]
}

interface IGetTodosStartedAction {
    type: typeof GET_TODOS_STARTED,
    payload: {}
}

interface IGetTodosFailureAction {
    type: typeof GET_TODOS_FAILURE,
    payload: IRequestError
}

export type TTaskActionTypes =
    IAddTaskAction
    | IRemoveTaskAction
    | ICompleteTaskAction
    | IAddAsyncTaskAction
    | IGetTodosSuccessAction
    | IGetTodosStartedAction
    | IGetTodosFailureAction;
// объединение экшнов, относящихся
// к одной логической области

export const addTask = (task: ITask): TTaskActionTypes => {
    return {
        type: ADD_TASK,
        payload: {
            ...task // payload: { id: id, text: text, isCompleted: isCompleted }
        }
    }
}

export const removeTask = (id: number): TTaskActionTypes => {
    return {
        type: REMOVE_TASK,
        payload: {
            id
        }
    }
}

export const completeTask = (id: number): TTaskActionTypes => {
    return {
        type: COMPLETE_TASK,
        payload: {
            id
        }
    }
}

export const addAsyncTask = (): TTaskActionTypes => {
    return {
        type: ADD_ASYNC_TASK,
        payload: {}
    }
}

export const getTodosSuccess: ActionCreator<TTaskActionTypes> = (todos: IAxiosResponse[]) => ({
    type: GET_TODOS_SUCCESS,
    payload: [
        ...todos
    ]
});

export const getTodosStarted: ActionCreator<TTaskActionTypes> = () => ({
    type: GET_TODOS_STARTED,
    payload: {}
});

export const getTodosFailure: ActionCreator<TTaskActionTypes> = (error: IError) => ({
    type: GET_TODOS_FAILURE,
    payload: {
        error
    }
});
