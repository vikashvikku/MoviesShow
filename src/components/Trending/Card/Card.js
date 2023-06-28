import React, { useState } from "react";
import "./Card.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  toggleBookmark,
  updateTrendingBookmark,
} from "../../../redux/moviesSlice";
import { useDispatch } from "react-redux";
// import Detail from "./Detail";
// import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { id, image, year, name, showsType, types, icons, bookmarked } = movie;
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const handleBookMark = () => {
    dispatch(updateTrendingBookmark(id));
    // If id doesn't match
    dispatch(toggleBookmark(movie));
    // else remove bookmarked

    setIsBookmarked(!isBookmarked);
  };

  const dispatch = useDispatch();

  return (
    // <Link to="/detail/:id">
    <div className="card">
      <div className="img-container">
        <div className="shadow-container" />
        <img className="card" src={image} alt="movie_photo" />;
      </div>
      <div className="details">
        <div className="detail-1">
          <p>{year}</p>
          {icons}
          <p>{showsType}</p>
          <p>{types}</p>
        </div>
        <div className="movie-name">{name}</div>
        <div className="bookmark-circle">
          <div onClick={handleBookMark} className="bookmarks_trends">
            {isBookmarked ? (
              <BookmarkIcon fontSize="small" />
            ) : (
              <BookmarkBorderIcon fontSize="small" />
            )}
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
