import { ADD_TASK, REMOVE_TASK } from "../actions";
import { ITask } from "../../../mock-data/todos";

interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: {
        id: number;
    };
}

export type TTaskActionTypes = IAddTaskAction | IRemoveTaskAction; // объединение экшнов, относящихся
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
