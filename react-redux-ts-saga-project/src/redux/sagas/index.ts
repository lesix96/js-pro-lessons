import { all, fork } from "redux-saga/effects";
import tasksSaga from "./tasksSagas/tasksSagas";

export function* rootSaga() {
    console.log('root saga');
    yield all([fork(tasksSaga)]);
}
