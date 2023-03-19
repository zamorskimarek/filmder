import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import moviesReducer from './movieReducer';
import watchFetchMovies from './sagas';

export type RootState = ReturnType<typeof store.getState>

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    moviesState: moviesReducer,
  },
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([watchFetchMovies()]);
}

sagaMiddleware.run(rootSaga);
