import React, {useEffect} from "react";
import './styles/container.css';
import {Header} from "./components/Header";
import {Routes, Route, useNavigate} from "react-router";
import {Edit} from './components/Edit'
import {Task} from "./components/Task";
import {useDispatch, useSelector} from "react-redux";
import {loadTasksAction} from "./sagas/sagaActions";

function App({item, value, setValue, task}) {

    const editing = useSelector((store) => store.toolkitReducers.editing);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadTasksAction(task))
    }, [])

    useEffect(() => {
        if (Object.keys(editing).length === 0) {
            return navigate('/')
        }
    }, [])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Task item={item}/>}/>
                <Route path='/edit' element={<Edit value={value} setValue={setValue}/>}/>
            </Routes>
        </div>
  );
}

export default App