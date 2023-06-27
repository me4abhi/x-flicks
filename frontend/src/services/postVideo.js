import axios from "axios";
import { URL } from "../data/api";

const postVideo = async (newVideo) => {
    try {
        const videoUpload = await axios.post(URL, newVideo);
        console.log("Success: Video Upload; File: postVideo.js");
        return videoUpload;
    } catch(error) {
        console.log("Failed: Video Upload; File: postVideo.js");
        throw error;
    }
}

export default postVideo;