import { trending } from "../../../api/moviesData.js";
import Card from "../../Trending/Card/Card.js";

const Detail = () => {
  // console.log("Hey", id);
  return (
    <div className="trending">
      <p className="trending-text">Detail</p>
      <div className="card-list"></div>
    </div>
  );
};

export default Detail;
