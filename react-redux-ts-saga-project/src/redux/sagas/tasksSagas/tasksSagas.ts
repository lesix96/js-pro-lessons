import { all, put, takeLatest, call, select } from "redux-saga/effects";
import { getTodos } from "../../../api/fetchTasks/fetchTasks";
import { ADD_ASYNC_TASK } from "../../actions/actions";
import { getTodosFailure, getTodosStarted, getTodosSuccess } from "../../actions/tasksActionCreators/actionCreator";
import { taskSelector } from "../../selectors/tasksSelectors/tasksSelectors";

export interface IAxiosResponse {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

function* fetchTodoSaga() {
    const tasks = yield select(taskSelector);
    console.log({tasks});
    try {
        yield put(
            getTodosStarted()
        );

        const response = yield call(getTodos);
        if (response.data) {
            yield put(
                getTodosSuccess(response.data)
            );
        } else if (response.error) {
            yield put(
                getTodosFailure(response.error)
            );
        }
    } catch (e) {
        yield put(
            getTodosFailure(e)
        );
    }
}

function* tasksSaga() {
    yield all([takeLatest(ADD_ASYNC_TASK, fetchTodoSaga)]);
}

export default tasksSaga;
