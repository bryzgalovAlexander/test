import React from "react";
import {useDispatch, useSelector} from "react-redux";
import '../styles/container.css';
import {NavLink} from "react-router-dom";
import {deleteTodoSagaAction, doDoneTodoAction} from "../sagas/sagaActions";
import {goToEdit} from "../redux/store/toolkit-redux/toolkitReducers";
import axios from "axios";

export const Task = () => {

    const dispatch = useDispatch()
    const todos = useSelector((store)=> store.toolkitReducers.todos);
    axios.get('/todos').then(res => console.log(res.data))

    return(
        todos.map((item) => (
      <div className={'task-container'} key={item.id}>
      <div className={'text-container'}
           key={item.id}
           style={{ textDecoration: item.isDone ? 'line-through' : '' }}>
          {item.title}
          <div className={'buttons-container'}>
              <input
                  type={'checkbox'}
                  onChange={() => dispatch(doDoneTodoAction({id: item.id, isDone: item.isDone}))}
                  checked={item.isDone ? true : ''}
              />
              <button className={'delete-button'}
                      onClick={() => dispatch(deleteTodoSagaAction(item.id))}>
                  delete
              </button>
              <NavLink to={'/edit'}>
              <button
                  className={'change-button'}
                  onClick={() => dispatch(goToEdit(item.id)) }>
                  edit
              </button>
              </NavLink>
          </div>
      </div>
      </div>
            )
        )
    )
}

