import React from "react";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
  return (
    <div className="grid__5--cal">
      {data?.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`} className="card" key={movie.id}>
            <img
              className="movie__img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <div className="card__info">
              <h3>{movie.original_title}</h3>
              <p>{movie.release_date}</p>
              <span>{movie.vote_average}⭐</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
