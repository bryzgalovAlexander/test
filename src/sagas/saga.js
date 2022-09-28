import {
    deleteTaskByIdAPI,
    createTaskAPI, doDoneTaskAPI, updateTaskAPI, loadTasksAPI,
} from "../apis";
import {
    addTodo,
    doDoneTodo,
    updateTodo,
    deleteTodo,
    loadTasksFromServer
} from "../redux/store/toolkit-redux/toolkitReducers";
import {put, call,} from "redux-saga/effects";

export function* createTaskSaga(action) {
    try {
        const {data} = yield call(createTaskAPI, action.payload)
        yield put(addTodo(data))
    } catch (e) {
        console.log(e);
    }
}

export function* deleteTaskByIdSaga(action) {
    try {
        yield call(deleteTaskByIdAPI, action.payload)
        yield put(deleteTodo(action.payload))
    } catch (e) {
        console.log(e);
    }

}

export function* doDoneTodoByIdSaga(action) {
    try {
        yield call(doDoneTaskAPI, action)
        yield put(doDoneTodo(action.payload.id))
    } catch (e) {
        console.log(e);
    }
}

export function* updateTodoByIdSaga(action) {
    try {
        yield call(updateTaskAPI, action)
        yield put(updateTodo(action.payload.title))
    } catch (e) {
        console.log(e);
    }
}

export function* loadTasksSaga() {
    try {
        const { data } = yield call(loadTasksAPI)
        yield put(loadTasksFromServer(data))
    } catch (e) {
        console.log(e);
    }
}