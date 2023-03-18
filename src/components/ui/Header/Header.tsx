import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesRequest } from "../../../redux/actions";

import "./Header.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TheatersIcon from "@mui/icons-material/Theaters";

import { useSelector } from "react-redux";

const systemOverwriteIcon = {
  fontSize: "5rem",
  fill: "url(#linearColors)",
};

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMoviesRequest());
    }, 2000);
  }, [dispatch]);
  const movies = useSelector((state: any) => state.moviesState.movies);
  console.log(movies, "!!!");

  return (
    <section className="header">
      <h1 className="header__title">Filmder</h1>
      {movies.length === 0 ? <h2>loading</h2> : <h2>{movies[0].id}</h2>}
      <div className="header__icons">
        <svg width={0} height={0}>
          <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fd3546" />
            <stop offset={1} stopColor="#810303" />
          </linearGradient>
        </svg>
        <TheatersIcon sx={systemOverwriteIcon} />
        <WhatshotIcon sx={systemOverwriteIcon} />
        <TheatersIcon sx={systemOverwriteIcon} />
      </div>
    </section>
  );
};
