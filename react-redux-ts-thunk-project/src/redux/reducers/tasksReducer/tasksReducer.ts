import { ADD_TASK, GET_TODOS_FAILURE, GET_TODOS_STARTED, GET_TODOS_SUCCESS } from "../../actions/actions";
import { ITask } from "../../../mock-data/todos";
import { IError, TTaskActionTypes } from "../../actions/tasksActionCreators/actionCreator";

export interface IInitialState {
    tasks: ITask[];
    isLoading: boolean;
    error: IError | null;
}

const initialState = {
    tasks: [],
    isLoading: false,
    error: null
};

const tasksReducer = (state = initialState, { payload, type }: TTaskActionTypes): IInitialState => {
    switch (type) {
        case ADD_TASK :
            return {
                ...state, tasks: [
                    ...state.tasks, {
                        id: payload.id,
                        text: payload.text,
                        isCompleted: payload.isCompleted,
                    }
                ]
            };
        case GET_TODOS_STARTED:
            return {
                ...state, isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state, tasks: [
                    ...payload
                ], isLoading: false,
            };
        case GET_TODOS_FAILURE:
            return {
                ...state, error: payload.error, isLoading: false,
            };
        default:
            return state;
    }
}

export default tasksReducer;
