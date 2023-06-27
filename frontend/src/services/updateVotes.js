import axios from "axios";
import { URL } from "../data/api";

const updateVotes = async (videoId, voteType) => {
  const votesEndpoint = URL + "/" + videoId + "/votes";
  const votes_update_body = {
    vote: voteType,
    change: "increase",
  };

  try {
    const votesUpdated = await axios.patch(votesEndpoint, votes_update_body);
    return votesUpdated;
  } catch (error) {
    throw error;
  }
};

export default updateVotes;
