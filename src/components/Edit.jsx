import React, {useState} from "react";
import '../styles/container.css'
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {goToMain} from "../redux/store/toolkit-redux/toolkitReducers";
import {updateTodoAction} from "../sagas/sagaActions";

export const Edit = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const editing = useSelector((store)=> store.toolkitReducers.editing);

return (
        <div className={'edit-container'}>
            <div>
                <div className={'counter-container'}>edit your task...</div>
                <input
                    className={'edit-input'}
                    onChange={(e)=> setValue(e.target.value)}
                    placeholder={editing.title}
                    type={'text'}
                    maxLength={24}
                    value={value}
                />
                <NavLink to='/'>
                    <button
                        className={'ok-button'}
                        onClick={() => {dispatch(updateTodoAction({title: value, id: editing.id}))}}>
                        ok
                    </button>
                </NavLink>
                <NavLink to='/'>
                    <button className={'back-button'} onClick={() => {dispatch(goToMain(editing)) }}>back</button>
                </NavLink>
            </div>
        </div>
)
}