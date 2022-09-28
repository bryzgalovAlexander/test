import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../styles/container.css'
import { addTodoSagaAction, } from '../sagas/sagaActions'

export const Header = () => {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const todos = useSelector((store) => store.toolkitReducers.todos);
    const editing = useSelector((store) => store.toolkitReducers.editing)

    return(
      <div className="App">
          <div className={'container'}>
              <div className={'counter-container'}>
                  <div>
                      total: {todos.length}
                  </div>
                  <div>
                      completed: {todos.filter((item) =>
                      (item.isDone)).length}
                  </div>
              </div>
                  <div className={'add-container'}>
                      <input className={'input'}
                             maxLength={24}
                             value={task}
                             onChange={(event) => setTask(event.target.value)}
                             type={'text'}
                      />
                      <button
                          className={Object.keys(editing).length === 0 ? 'add-button-active' : 'add-button-inactive'}
                          type={'button'}
                          onClick={() => {
                              dispatch(addTodoSagaAction({ title: task, isDone: false }))
                              setTask('')
                              }}>
                          add
                      </button>
                  </div>
          </div>
      </div>
          )
}