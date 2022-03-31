import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from './reducers'
import thunk from 'redux-thunk'

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))