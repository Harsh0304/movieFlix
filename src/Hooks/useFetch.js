import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [shimmer, setShimmer] = useState(true);

  const baseURL = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseURL);
      const jsondata = await response.json();
      setData(jsondata.results);
      setShimmer(false);
    };
    fetchData();
  }, [baseURL]);
  return { data, shimmer };
};

export default useFetch;
