import "./VideoPlayer.css";
import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import updateVotes from "../../services/updateVotes";
import updateViews from "../../services/updateViews";
import getVideo from "../../services/getVideo";

function VideoPlayer({ video }) {
  const { _id, videoLink, title, contentRating, releaseDate, votes } = video;
  const { upVotes, downVotes } = votes;

  const [upVote, setUpVote] = useState(upVotes);
  const [downVote, setDownVote] = useState(downVotes);

  useEffect(() => {
    const increaseViews = async () => {
      await updateViews(_id);
    };
    increaseViews();

    getVideo(_id)
      .then((response) => {
        const { upVotes, downVotes } = response.votes;
        setUpVote(upVotes);
        setDownVote(downVotes);
      })
      .catch((error) => console.log(error));
  }, [_id]);

  const handleVotes = async (voteType) => {
    await updateVotes(_id, voteType);
    voteType === "upVote"
      ? setUpVote((prevState) => prevState + 1)
      : setDownVote((prevState) => prevState - 1);
  };

  return (
    <>
      <iframe
        id="current-video-player"
        title={_id}
        src={`https://${videoLink}`}
        allowFullScreen
      ></iframe>
      <div id="current-video-details">
        <div id="current-video-information">
          <h1 id="current-video-title">{title}</h1>
          <div id="current-video-subtitle">
            <span>{contentRating}</span>
            <span>•</span>
            <span>{releaseDate}</span>
          </div>
        </div>
        <div id="current-video-engagement">
          <span
            className="pill-active"
            style={{ backgroundColor: "#2f2f2f" }}
            onClick={() => handleVotes("upVote")}
          >
            <ThumbUpIcon fontSize="string" />
            <span>{upVote}</span>
          </span>
          <span
            className="pill-active"
            style={{ backgroundColor: "#2f2f2f" }}
            onClick={() => handleVotes("downVote")}
          >
            <ThumbDownIcon fontSize="string" />
            <span>{downVote}</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
