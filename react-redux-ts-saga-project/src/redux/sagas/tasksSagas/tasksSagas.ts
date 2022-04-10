import axios from "axios";
import { all, put, takeLatest, call } from "redux-saga/effects";
import { ADD_ASYNC_TASK } from "../../actions/actions";
import { getTodosFailure, getTodosStarted, getTodosSuccess } from "../../actions/tasksActionCreators/actionCreator";

export interface IAxiosResponse {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

const getTodos = (api: string) =>
    axios
        .get<IAxiosResponse[]>(api)

function* fetchTodoSaga() {
    try {
        yield put(
            getTodosStarted()
        );

        const response = yield call(getTodos, "https://jsonplaceholder.typicode.com/todos");
        if (response.data) {
            yield put(
                getTodosSuccess(response.data)
            );

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
