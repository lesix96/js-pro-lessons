import { all, put, takeLatest, call, select } from "redux-saga/effects";
import { getTodos } from "../../../api/fetchTasks/fetchTasks";
import { ADD_ASYNC_TASK } from "../../actions/actions";
import {
    getTodosFailure,
    getTodosStarted,
    getTodosSuccess,
    IError
} from "../../actions/tasksActionCreators/actionCreator";
import { taskSelector } from "../../selectors/tasksSelectors/tasksSelectors";

export interface IAxiosResponse {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

interface IResponseObject {
    data: IAxiosResponse[];
    error: IError;
}

function* fetchTodoSaga() {
    const tasks = yield select(taskSelector);
    console.log({tasks});
    try {
        yield put(
            getTodosStarted() // action creator
        );

        const response: IResponseObject = yield call(getTodos);
        if (response.data) {
            const mappedResponse = response.data.map((item: IAxiosResponse) => ({ id: item.id, isCompleted: item.completed, text: item.title }));
            yield put(
                getTodosSuccess(mappedResponse) // action creator
            );
        } else if (response.error) {
            yield put(
                getTodosFailure(response.error) // action creator
            );
        }
    } catch (e) {
        yield put(
            getTodosFailure(e) // action creator
        );
    }
}

function* tasksSaga() {
    yield all([
        takeLatest(ADD_ASYNC_TASK, fetchTodoSaga),
    ]);
}

export default tasksSaga;
