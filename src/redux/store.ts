import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import languageReducer from './features/language/languageSlice';
import kitReducer from './features/kit/kitSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'auth' ],  // Persist auth state only
};

const rootReducer = combineReducers( {
    auth: authReducer,
    user: userReducer,
    language: languageReducer,
    kit: kitReducer,
} );

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = configureStore( {
    reducer: persistedReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: false,
        } ),
} );

export const persistor = persistStore( store );
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
