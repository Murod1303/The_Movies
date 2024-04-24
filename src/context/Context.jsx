/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TrendingContext = createContext([]);

const ContextProvider = ({ children }) => {
  const [trend, setTrend] = useState([]);
  const [popular, setPop] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvSerial, setTV] = useState([]);
  return (
    <TrendingContext.Provider
      value={{
        trend,
        setTrend,
        popular,
        setPop,
        movies,
        setMovies,
        tvSerial,
        setTV,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export default ContextProvider;
