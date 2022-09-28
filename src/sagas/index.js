import {takeEvery,} from 'redux-saga/effects'
import {
    doDoneTodoByIdSaga,
    deleteTaskByIdSaga,
    createTaskSaga,
    updateTodoByIdSaga,
    loadTasksSaga
} from "./saga";
import {sagaActions} from './sagaActions'

export function* watchSaga() {
    yield takeEvery(sagaActions.DELETE_DATA_SAGA, deleteTaskByIdSaga)
    yield takeEvery(sagaActions.FETCH_DATA_SAGA ,createTaskSaga)
    yield takeEvery(sagaActions.DO_DONE_DATA_SAGA, doDoneTodoByIdSaga)
    yield takeEvery(sagaActions.UPDATE_DATA_SAGA, updateTodoByIdSaga)
    yield takeEvery(sagaActions.LOAD_TASKS, loadTasksSaga)
}

export default function* rootSaga() {
    yield watchSaga();
}
