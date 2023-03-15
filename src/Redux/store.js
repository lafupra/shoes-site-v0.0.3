import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import userReducer from "./userRedux"
import {configureStore} from "@reduxjs/toolkit"


const persistConfig = {
    key: 'user',
    storage,
};


const reducers = combineReducers({ user: userReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export  const  store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
