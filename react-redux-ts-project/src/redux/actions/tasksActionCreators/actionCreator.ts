import { ADD_TASK } from "../actions";
import { ITask } from "../../../mock-data/todos";

interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

export type TTaskActionTypes = IAddTaskAction; // объединение экшнов, относящихся
// к одной логической области

export const addTask = (task: ITask): TTaskActionTypes => {
    return {
        type: ADD_TASK,
        payload: {
            ...task
        }
    }
}
