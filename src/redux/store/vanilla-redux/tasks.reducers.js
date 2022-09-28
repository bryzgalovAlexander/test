import {
    ADD_TASK,
    GO_TO_EDIT,
    DELETE_TASK,
    DONE_TASK,
    UPDATE_TASK,
    LOAD_TASKS,
    GO_TO_MAIN,
} from "./tasks.actions";

const initialState = {
    todos: [],
    editing: {}
};

export default (state= initialState, action ) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    isDone: false,
                    id: Math.floor(Math.random() * 1000000)
                }]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id)
            }
        }
        case DONE_TASK: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            isDone: !item.isDone,
                        }
                    } return item
                })
            }
        }
        case GO_TO_EDIT: {
            return {
                ...state,
                editing: state.todos.find((item) => item.id === action.id)
            }
        }
        case UPDATE_TASK: {
            return {
                ...state,
                todos: state.todos.map((item) => item.id === state.editing.id ? {...item, title: action.title} : item),
                editing: state.editing = {}
            }
        }
        case LOAD_TASKS: {
            return {
                ...state,
                todos: JSON.parse(localStorage.getItem('storage')).map(item => item)
            }
        }
       case GO_TO_MAIN: {
            return {
                ...state,
                editing: state.editing = {}
            }

        }
        default: return state
    }
}



