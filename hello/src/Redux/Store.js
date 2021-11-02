import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk,logger)))

export default store