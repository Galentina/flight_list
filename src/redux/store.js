import {applyMiddleware, createStore} from "redux";
import flightList from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import reduxLogger from 'redux-logger';



const store = createStore(flightList, composeWithDevTools(applyMiddleware(thunk, reduxLogger)));


export default store;

