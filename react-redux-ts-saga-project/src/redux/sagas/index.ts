import { all, fork } from "redux-saga/effects";
import tasksSagas from "./tasksSagas/tasksSagas";

export function* rootSaga() {
    yield all([fork(tasksSagas)]);
}
