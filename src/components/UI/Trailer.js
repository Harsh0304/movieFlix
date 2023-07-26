import { useState } from "react";
import React, { useEffect } from "react";
import "./Trailer.css";
import { useParams } from "react-router-dom";

const Trailer = ({ onCloseModel }) => {
  const [trailerData, setTrailerData] = useState([]);
  const { id } = useParams();
  const trailerURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a9b9135d3c5af84cb2e83ab844eeb201`;
  const videoURL = `https://www.youtube.com/embed/${trailerData.key}`;

  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(trailerURL);
      const jsondata = await response.json();
      console.log(jsondata);
      setTrailerData(jsondata.results[jsondata.results.length - 1]);
    };
    fetchTrailer();
  }, [trailerURL]);

  return (
    <>
      <div className="model__wrapper" onClick={() => onCloseModel(false)}></div>
      <div className="watch">
        <div className="close" onClick={() => onCloseModel(false)}>
          x
        </div>
        <iframe
          key={trailerData.id}
          width="750"
          height="450"
          src={videoURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default Trailer;
