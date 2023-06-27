import axios from "axios";
import { URL } from "../data/api";

const getVideos = async (searchParams, sortParams) => {
  let endpoint = "";

  if (searchParams.length > 0) {
    endpoint = "?" + searchParams;
  } else if (sortParams.length > 0) {
    endpoint = "?" + sortParams;
  }
  
  try {
    const videos = await axios.get(URL + endpoint);
    return videos.data;
  } catch (error) {
    throw error;
  }
};

export default getVideos;
