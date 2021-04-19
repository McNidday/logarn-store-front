import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../rootReducer'

export const TestStore = (initialState) => {
    const createStoreWithMiddleWares = applyMiddleware(ReduxThunk)(createStore)
    const store = createStoreWithMiddleWares(rootReducer, initialState)
    return store
}