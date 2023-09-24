import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user/UserReducer'

const reducer = combineReducers({
  user: userReducer,
})

//   const rootReducer = (state, action) => {
//     if (action.type === "USER_LOGOUT") {
//       return reducer(undefined, action)
//     }
//     return reducer(state, action)
//   }

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
