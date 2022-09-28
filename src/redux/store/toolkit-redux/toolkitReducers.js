import {createSlice} from "@reduxjs/toolkit";

export const toolkitSlice = createSlice( {
    name: 'toolkit',
    initialState: {
        todos: [],
        editing: {}
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },

        deleteTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },

        doDoneTodo(state, action) {
            state.todos = state.todos.map(item =>
                item.id === action.payload ? {...item, isDone: !item.isDone} : item)
        },

        goToEdit(state, action) {
           state.editing = state.todos.find((item) => item.id === action.payload)
        },

        updateTodo(state, action) {
            state.todos = state.todos.map((item) =>
                item.id === state.editing.id ? {...item, title: action.payload} : item);
            state.editing = {}
        },

        loadTodos(state) {
           state.todos = JSON.parse(localStorage.getItem('storage')).map(item => item);

        },

        goToMain(state) {
            state.editing = {}
        },

        loadTasksFromServer(state, action) {
            state.todos = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {
    addTodo,
    deleteTodo,
    doDoneTodo,
    goToMain,
    updateTodo,
    goToEdit,
    loadTasksFromServer,
} = toolkitSlice.actions;