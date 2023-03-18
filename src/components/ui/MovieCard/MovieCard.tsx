import React from "react";

import "./MovieCard.css";

interface MovieCardProps {
  title: string;
  imageURL: string;
}

export const MovieCard = ({ title, imageURL }: MovieCardProps) => {
  return (
    <section className="card" style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover" }}>
      {/* {movies.length === 0 ? <h2>loading</h2> : <h2>{movies[0].id}</h2>} */}
      <h2>{title}</h2>
    </section>
  );
};
