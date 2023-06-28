import "./SideBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { Link } from "react-router-dom";

import { FaDiceSix, FaThLarge, FaRegBookmark, FaWpforms } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarks, setIsBookmarks] = useState({});

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookmarks = (value) => {
    if (isExpanded === true) {
      setIsBookmarks(isBookmarks + value);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="side-container">
        <div className="movie-icon" onClick={handleToggle}>
          <MovieCreationIcon />
        </div>
        <div className="sidebar-btn">
          <Link to="/">
            <div className="sidebar ">
              <FaThLarge />
              {isExpanded ? "Dashboard" : null}
            </div>
          </Link>
          <Link to="/">
            <div className="sidebar">
              <FaDiceSix />
              {isExpanded ? "Movies" : null}
            </div>
          </Link>
          <Link to="/">
            <div className="sidebar">
              <FaWpforms />
              {isExpanded ? "Recommended" : null}
            </div>
          </Link>
          <Link to="/bookmarks">
            <div onClick={handleBookmarks} className="sidebar">
              <FaRegBookmark />
              {isExpanded ? "Bookmark" : null}
            </div>
          </Link>
        </div>

        <div className="profile">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
