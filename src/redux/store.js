import {applyMiddleware, createStore} from "redux";
import flightList from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";



const store = createStore(flightList, composeWithDevTools(applyMiddleware()));

export default store;

