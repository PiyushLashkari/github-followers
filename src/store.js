import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { profileReducer } from "./components/Profile/redux/reducer";

// const asyncFunctionMiddleware = (store) => (action) => (next) => {
//   debugger;
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// };

const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(profileReducer, enhancers);

export default store;
