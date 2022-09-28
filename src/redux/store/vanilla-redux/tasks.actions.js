export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const DONE_TASK= 'DONE_TASK';
export const GO_TO_EDIT = 'GO_TO_EDIT';
export const UPDATE_TASK = 'UPDATE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS'
export const GO_TO_MAIN = 'GO_TO_MAIN'

export const addTask = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD_TASK, title})
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE_TASK, id})
    }
}

export const doDone = (id) => {
    return (dispatch) => {
        return dispatch({type: DONE_TASK, id})
    }
}

export const goToEdit = (id) => {
    return (dispatch) => {
        return dispatch({type: GO_TO_EDIT, id})
    }
}

export const updateTask = (title) => {
    return (dispatch) => {
        return dispatch({type: UPDATE_TASK, title})
    }
}

export const loadTasks = (todos) => {
    return (dispatch) => {
        return dispatch({type: LOAD_TASKS, todos})
    }
}

export const goToMain = (todos) => (
    (dispatch) => (dispatch({type: GO_TO_MAIN, todos})))