
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import regireducer from  "./Registration/regireducer"

const rootreducer = combineReducers({
    regi: regireducer
})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))

    console.log(store.getState())
export default store;    