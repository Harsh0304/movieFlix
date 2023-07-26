import useFetch from "../../Hooks/useFetch";
import CardList from "../../components/Card/CardList";
import "./Home.css";
import Shimmer from "../../components/UI/Shimmer";

const NowPlaying = ({ apiPath }) => {
  const { data, shimmer } = useFetch(apiPath);
  return (
    <div className="container now__playing">
      <h2 className="heading">Now Playing Movies</h2>
      {shimmer ? <Shimmer /> : <CardList data={data} />}
    </div>
  );
};

export default NowPlaying;
