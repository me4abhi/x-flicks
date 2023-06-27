import { Link } from "react-router-dom/cjs/react-router-dom";
import "./VideoCard.css";

function VideoCard({ video }) {
  const { previewImage, title, releaseDate, _id } = video;
  
  return (
    <Link to={`/video/${_id}`} className="video-card">
      <div className="video-card-image">
        <img
          src={previewImage}
          alt={title}
        />
      </div>
      <div className="video-card-content">
        <div className="video-card-content-title">
          {title}
        </div>
        <div className="video-card-content-upload-date">
            {releaseDate}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
