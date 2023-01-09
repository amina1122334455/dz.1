import { combineReducers } from "redux";
import users from "./users";

const rootReducers = () => {return combineReducers({
    users
})}

export default rootReducers;