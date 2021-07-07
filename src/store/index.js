import { combineReducers, createStore } from 'redux'
import userReducer from './reducers/userReducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['users']
}

const rootReducer = combineReducers({
    users: userReducer
})

const persistedRootReducer = persistReducer(persistConfig,rootReducer)


export const store = createStore(persistedRootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)

export default {store,persistor}