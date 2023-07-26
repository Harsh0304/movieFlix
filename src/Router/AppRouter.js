import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Popular from "../Pages/Popular/Popular";
import NowPlaying from "../Pages/Home/NowPlaying";
import TopRated from "../Pages/TopRated/TopRated";
import Upcoming from "../Pages/Upcoming/Upcoming";
import MovieDetail from "../Pages/MovieDetail/MovieDetail";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home apiPath="movie/now_playing" />,
      },
      {
        path: "movie/now_playing",
        element: <NowPlaying apiPath="movie/now_playing" />,
      },
      {
        path: "movie/popular",
        element: <Popular apiPath="movie/popular" />,
      },
      {
        path: "movie/top_rated",
        element: <TopRated apiPath="movie/top_rated" />,
      },
      {
        path: "movie/upcoming",
        element: <Upcoming apiPath="movie/upcoming" />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);
