import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Trending from "../pages/trending/Trending";
import Movies from "../pages/movies/Movies";
import TVPage from "../pages/tv/TV";
import Watchlist from "../pages/watchlist/Watchlist";
import OneMovie from "../pages/oneMovie/OneMovie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Trending />,
      },
      {
        path: "/movie",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <TVPage />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/one",
        element: <OneMovie />,
      },
      {
        path: "*",
        element: <h1>NoT found</h1>,
      },
    ],
  },
]);
