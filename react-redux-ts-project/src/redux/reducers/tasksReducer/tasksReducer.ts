import { ADD_TASK } from "../../actions/actions";
import { ITask, TASKS } from "../../../mock-data/todos";
import { TTaskActionTypes } from "../../actions/tasksActionCreators/actionCreator";

const initialState = TASKS;

const tasksReducer = (state = initialState, { payload, type }: TTaskActionTypes): ITask[] => {
    switch (type) {
        case ADD_TASK :
            return [
                ...state, {
                    id: payload.id,
                    text: payload.text,
                    isCompleted: payload.isCompleted,
                }
            ];
        default:
            return state;
    }
}

export default tasksReducer;
