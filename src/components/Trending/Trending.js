import "./Trending.css";
import Card from "./Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { trending } from "../../api/moviesData";
import { loadTrendingList } from "../../redux/moviesSlice";
import { useEffect } from "react";

const Trending = () => {
  const trendingList = useSelector((state) => state.movies.trendingList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadTrendingList(trending));
  // }, []);

  return (
    <div className="trending">
      <p className="trending-text">Trending</p>
      <div className="card-list">
        {/* Mapping */}

        {trendingList?.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
