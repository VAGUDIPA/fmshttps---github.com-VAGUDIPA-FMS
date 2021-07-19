
import participantReducer from "./productReducer";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
 
  stores: participantReducer,
  
});

export default rootReducer;