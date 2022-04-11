import { ADD_TASK, GET_TODOS_FAILURE, GET_TODOS_STARTED, GET_TODOS_SUCCESS, COMPLETE_TASK, REMOVE_TASK } from "../../actions/actions";
import { ITask } from "../../../mock-data/todos";
import {
    IError,
    IRequestError,
    ITaskIdentifier,
    TTaskActionTypes
} from "../../actions/tasksActionCreators/actionCreator";
import { IAxiosResponse } from "../../sagas/tasksSagas/tasksSagas";

export interface IInitialState {
    tasks: ITask[];
    isLoading: boolean;
    error: IError | null;
}

const initialState = {
    tasks: [] as ITask[],
    isLoading: false,
    error: null
};

const tasksReducer = (state = initialState, { payload, type }: TTaskActionTypes): IInitialState => {
    switch (type) {
        case ADD_TASK :
            return {
                ...state, tasks: [
                    ...state.tasks, {
                        id: (payload as ITask).id,
                        text: (payload as ITask).text,
                        isCompleted: (payload as ITask).isCompleted,
                    }
                ]
            };
        case REMOVE_TASK :
            return {
                ...state, tasks: state.tasks.filter(task => task.id !== (payload as ITaskIdentifier).id)
            };
        case COMPLETE_TASK :
            return {
                ...state, tasks: state.tasks.map(task => {
                    return {
                        ...task, isCompleted: task.id === (payload as ITaskIdentifier).id ? !task.isCompleted : task.isCompleted
                    }
                })
            };
        case GET_TODOS_STARTED:
            return {
                ...state, isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            const tasks = (payload as IAxiosResponse[]).map((item) => ({ ...item, isCompleted: item.completed, text: item.title }));
            return {
                ...state, tasks: [
                    ...state.tasks,
                    ...tasks as ITask[]
                ], isLoading: false, error: null
            };
        case GET_TODOS_FAILURE:
            return {
                ...state, error: (payload as IRequestError).error, isLoading: false,
            };
        default:
            return state;
    }
}

export default tasksReducer;
