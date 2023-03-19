import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { recommendations } from "../recommendations/recommendations";

import {
  FETCH_MOVIES_REQUEST,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./actions";


export function* fetchMovies(): Generator<any, any, AxiosResponse> {
  try {
    const mock = new MockAdapter(axios);
    mock
      .onGet("http://api.movis.com/recommendations")
      .reply(200, recommendations);
    const response = yield call(
      axios.get,
      "http://api.movis.com/recommendations"
    );
    yield put(fetchMoviesSuccess(response.data));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMovies);
}

export default watchFetchMovies;
