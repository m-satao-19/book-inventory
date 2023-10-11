import {combineReducers} from "redux";
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;