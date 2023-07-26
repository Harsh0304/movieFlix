import React from "react";
import useFetch from "../../Hooks/useFetch";
import CardList from "../../components/Card/CardList";
import Shimmer from "../../components/UI/Shimmer";

const Popular = ({ apiPath }) => {
  const { data, shimmer } = useFetch(apiPath);
  return (
    <div className="container popular">
      <h2 className="heading">Upcoming Movies</h2>
      {shimmer ? <Shimmer /> : <CardList data={data} />}
    </div>
  );
};

export default Popular;
