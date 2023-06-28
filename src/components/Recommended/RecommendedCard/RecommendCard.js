import React, { useState } from "react";
import "./RecommendedCard.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  toggleBookmark,
  updateRecommendedBookmark,
  updateTrendingBookmark,
} from "../../../redux/moviesSlice";
import { useDispatch } from "react-redux";

const RecommendCard = ({ movie, initialBookmark }) => {
  const { id, image, year, name, showsType, types, icons, bookmarked } = movie;
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarked || initialBookmark
  );

  const handleBookMark = () => {
    dispatch(updateRecommendedBookmark(id));
    dispatch(updateTrendingBookmark(id));
    // If id doesn't match
    dispatch(toggleBookmark(movie));
    // else remove bookmarked

    setIsBookmarked(!isBookmarked);
  };

  const dispatch = useDispatch();
  return (
    <div className="recommended-card">
      <div className="img-container">
        <img className="image-cont" src={image} alt="tree" />
      </div>
      <div className="details-recommend">
        <div className="detail-recommend-1">
          <h5 className="type">{year}</h5>
          {icons}
          <h5 className="type">{showsType}</h5>
          <h5 className="type">{types}</h5>
        </div>
        <div className="name">{name}</div>
      </div>
      <div onClick={handleBookMark} className="bookmark">
        {isBookmarked ? (
          <BookmarkIcon fontSize="small" />
        ) : (
          <BookmarkBorderIcon fontSize="small" />
        )}
      </div>
    </div>
  );
};

export default RecommendCard;
