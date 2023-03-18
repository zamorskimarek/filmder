import React, { SetStateAction, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import TinderCard from "react-tinder-card";

import { Movie } from "../../../../types/movies";
import { fetchMoviesRequest } from "../../../redux/actions";
import { MovieCard } from "../MovieCard";

import "./MovieCards.css";

export const MovieCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMoviesRequest());
    }, 1000);
  }, [dispatch]);
  const movies = useSelector((state: any) => state.moviesState.movies);
  console.log(movies, "!!!");

//   const characters = db;
  const [lastDirection, setLastDirection] = useState<SetStateAction<string>>();

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };

  return (
    <section className="cardSection">
      {/* {movies.length === 0 ? (
        <h2>loading</h2>
      ) : ( */}
      {/* // movies.map((movie: Movie) => (
        //   <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
        //     <MovieCard title={movie.title} imageURL={movie.imageURL} />
        //   </TinderCard>
        // )) */}
        <div className="cardContainer">

      {movies.map((movie: any) => (
          <TinderCard
          className="swipe"
          key={movie.name}
          onSwipe={(dir) => swiped(dir, movie.title)}
          onCardLeftScreen={() => outOfFrame(movie.title)}
        //   preventSwipe={["left"]}
          >
          <div
            style={{ backgroundImage: `url(${movie.imageURL})` }}
            className="card"
        >
            <h3>{movie.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
      {/* )} */}
    </section>
  );
};

