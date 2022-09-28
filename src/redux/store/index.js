import {combineReducers,} from "redux";
/*import tasks from "./tasks.reducers";*/
import toolkitReducers from "./toolkit-redux/toolkitReducers";

export const rootReducer = () => combineReducers({
    /*tasks,*/ toolkitReducers
});

