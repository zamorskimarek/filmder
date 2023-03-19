import { MoviesState } from "../../types/movies";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./actions";

const initialState: MoviesState = {
  movies: [],
  loading: true,
  error: null,
};

const moviesReducer = (state = initialState, action: any): MoviesState => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default moviesReducer;
