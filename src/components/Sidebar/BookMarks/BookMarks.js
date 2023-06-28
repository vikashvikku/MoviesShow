import React from "react";
import "./BookMarks.css";
import { useSelector } from "react-redux";
import RecommendCard from "../../Recommended/RecommendedCard/RecommendCard";

const BookMarks = () => {
  const bookmarks = useSelector((state) => state.movies.bookmarksList);

  return (
    <div className="bookmarks">
      <p className="bookmarks-text">BookMarks</p>
      <div className="bookmarks-card-list">
        {/* Mapping */}

        {bookmarks.map((movie) => {
          return <RecommendCard key={movie.id} movie={movie} initialBookmark />;
        })}
      </div>
    </div>
  );
};

export default BookMarks;
