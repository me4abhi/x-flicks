import axios from "axios";
import { URL } from "../data/api";

const updateViews = async (videoId) => {
  const votesEndpoint = URL + "/" + videoId + "/views";

  try {
    const votesUpdated = await axios.patch(votesEndpoint);
    return votesUpdated;
  } catch (error) {
    throw error;
  }
};

export default updateViews;
