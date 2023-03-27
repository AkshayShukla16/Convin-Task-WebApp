import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: window.devToolsExtension && window.devToolsExtension(),
});

sagaMiddleware.run(rootSaga);

export default Store;