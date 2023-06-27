import axios from "axios";

const URL = `https://1629b20f-2c63-4a57-87b2-5aace5973421.mock.pstmn.io/v1/videos`;

const getSortedVideos = async (sortByOption) => {
  let sortParams = "";

  sortParams = "?sortBy=" + sortByOption;

  try {
    const videos = await axios.get(URL + sortParams);
    console.log("Success: Videos Sort & Fetch; File: getVideos.js");
    return videos.data;
  } catch (error) {
    console.log("Failed: Videos Sort &  Fetch; File: getVideos.js");
    throw error;
  }
};

export default getSortedVideos;
