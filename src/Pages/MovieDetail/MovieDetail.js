import React, { useState } from "react";
import "./MovieDetail.css";
import Button from "../../components/UI/Button";
import useFetchDetail from "../../Hooks/useFetchDetail";
import ShimmerDetail from "../../components/UI/ShimmerDetail";
import Trailer from "../../components/UI/Trailer";
const MovieDetail = () => {
  const { movie, image, shimmerDetail } = useFetchDetail();
  const [openModel, setOpenModel] = useState(false);

  const handleOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };

  return shimmerDetail ? (
    <ShimmerDetail />
  ) : (
    <div className="container">
      {openModel && <Trailer onCloseModel={handleCloseModel} />}
      <div className="card__inner">
        <main className="card__body">
          <img src={image} alt="" />
          <div className="card__detail--info">
            <h1 className="card__title">{movie.title}</h1>

            <p className="card__slug">{movie.overview}</p>

            <div className="action">
              <button className="btn btn__trailer" onClick={handleOpenModel}>
                ▶ Watch trailer
              </button>
              <div className="card__rating">
                {movie?.vote_average?.toFixed(1)}⭐
              </div>
            </div>
            <div className="genres">
              {movie?.genres?.map((genre) => {
                return (
                  <Button name={genre.name} bg="btn__genre" key={genre.id} />
                );
              })}
            </div>
            <ul className="list list--info">
              <li>{movie.release_date}</li>
              <li>
                {movie.runtime > 0 && (movie.runtime / 60).toFixed(0)}h
                {movie.runtime % 60}
                min
              </li>
              <li>{movie.original_language.toUpperCase()}</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MovieDetail;
