import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001'

export const createTaskAPI = async (task) => axios.post(`/todos`, task);

export const deleteTaskByIdAPI = async (id) => axios.delete(`/todos/${id}`);

export const doDoneTaskAPI = async (action) => axios.patch(`/todos/${action.payload.id}`,
    {isDone: !action.payload.isDone});

export const updateTaskAPI = async (action) => axios.patch(`/todos/${action.payload.id}`,
    {title: action.payload.title});

export const loadTasksAPI = async () => axios.get('/todos')