export interface Movie {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}
