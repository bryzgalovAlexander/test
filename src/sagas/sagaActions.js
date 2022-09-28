export const sagaActions = {
  FETCH_DATA_SAGA: "FETCH_DATA_SAGA",
  DELETE_DATA_SAGA: "DELETE_DATA_SAGA",
  DO_DONE_DATA_SAGA: "DO_DONE_DATA_SAGA",
  UPDATE_DATA_SAGA: "UPDATE_DATA_SAGA",
  GO_TO_EDITING_SAGA: 'GO_TO_EDITING_SAGA',
  LOAD_TASKS: 'LOAD_TASKS'
};

export const addTodoSagaAction = (payload) => ({
  type: sagaActions.FETCH_DATA_SAGA,
  payload,
})

export const deleteTodoSagaAction = (payload) => ({
  type: sagaActions.DELETE_DATA_SAGA,
  payload,
})

export const doDoneTodoAction = (payload) => ({
  type: sagaActions.DO_DONE_DATA_SAGA,
  payload,
})

export const updateTodoAction = (payload) => ({
  type: sagaActions.UPDATE_DATA_SAGA,
  payload,
})

export const loadTasksAction = () => ({
  type: sagaActions.LOAD_TASKS
})