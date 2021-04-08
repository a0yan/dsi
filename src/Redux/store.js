import {createStore,applyMiddleware} from 'redux'
import reducer from './Ham/Ham-reducer'
const middlewares=[]
const store=createStore(reducer,applyMiddleware(...middlewares))
export default store