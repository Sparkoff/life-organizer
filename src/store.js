import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import navigation from './components/Navigation/reducer'


const reducers = combineReducers({
	navigationStore: navigation
})

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk))


export default createStore(reducers, middleware)
