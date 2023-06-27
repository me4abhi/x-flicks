import "./Dashboard.css";
import { useState, useEffect, useContext } from "react";
import { FilterVideosContext } from "../../context/FilterVideosContext";
import { SortVideosContext } from "../../context/SortVideosContext";
import getVideos from "../../services/getVideos";
import VideoCard from "../../components/VideoCard/VideoCard";

function Dashboard() {
  let video_grid = ``;
  const [videoList, setVideoList] = useState([]);
  const { searchParams } = useContext(FilterVideosContext);
  const { sortParams } = useContext(SortVideosContext);

  useEffect(() => {
    getVideos(searchParams, sortParams)
      .then((response) => setVideoList(response.videos))
      .catch((error) => console.log(error));
  }, [searchParams, sortParams]);

  video_grid = videoList.map((video) => {
    return <VideoCard key={video._id} video={video} />;
  });

  return (
    <>
      {videoList.length > 0 ? (
        <div className="dashboard">{video_grid}</div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Dashboard;
