import Header from "../layouts/Header/Header";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Dashboard from "../layouts/Dashboard/Dashboard";
import getVideo from "../services/getVideo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function VideoPage() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    getVideo(id)
      .then((response) => {
        setCurrentVideo(response);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Header interactive={false} />
      <div style={{ width: "80%", margin: "2rem auto" }}>
        {currentVideo ? (
          <VideoPlayer video={currentVideo} />
        ) : (
          <div>Loading...</div>
        )}
        <hr style={{ border: "1px solid #2f2f2f", marginBottom: "2rem" }} />
        <Dashboard />
      </div>
      {console.log(currentVideo)}
    </>
  );
}

export default VideoPage;
