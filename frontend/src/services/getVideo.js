import axios from "axios";
import { URL } from "../data/api";

const getVideo = async (id) => {
  const videoId = "/" + id;

  try {
    const video = await axios.get(URL + videoId);
    return video.data;
  } catch (error) {
    throw error;
  }
};

export default getVideo;
