import React from "react";
import "./Recommended.css";
import RecommendCard from "./RecommendedCard/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import { recommended } from "../../api/moviesData";
import { loadRecommendedList } from "../../redux/moviesSlice";
import { useEffect } from "react";

const Recommended = () => {
  const recommendedList = useSelector((state) => state.movies.recommendedList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadRecommendedList(recommended));
  // }, []);

  return (
    <div className="recommend">
      <p className="recommend-text">Recommended</p>
      <div className="recommend-card-list">
        {/* Mapping */}
        {recommendedList?.map((movie) => (
          <RecommendCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
