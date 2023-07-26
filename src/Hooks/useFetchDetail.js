import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchDetail = () => {
  const [movie, setMovie] = useState([]);
  const [shimmerDetail, setShimmerDetail] = useState(true);
  const { id } = useParams();
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsondata = await response.json();
      setMovie(jsondata);
      setShimmerDetail(false);
    };
    fetchData();
  }, [url]);
  return { movie, image, shimmerDetail };
};

export default useFetchDetail;
