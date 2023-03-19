import { AxiosRequestConfig } from 'axios';
import {type Movie} from '../../types/movies';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

interface AxiosGetError {
  message: string;
  response?: {
    status: number;
    data: {
      message: string;
    };
  };
  request?: XMLHttpRequest;
  config?: AxiosRequestConfig;
  isAxiosError: boolean;
  toJSON: () => object;
}

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: AxiosGetError | unknown) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});
