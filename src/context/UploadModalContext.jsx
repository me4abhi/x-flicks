import { createContext, useState } from "react";
import postVideo from "../services/postVideo";
import formatDate from "../utils/formatDate";

const UploadModalContext = createContext();

const UploadModalProvider = ({ children }) => {
  const defaultVideoFormData = {
    videoLink: "",
    previewImage: "",
    title: "",
    genre: "",
    contentRating: "",
    releaseDate: null,
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [uploadVideoFormData, setUploadVideoFormData] =
    useState(defaultVideoFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUploadVideoFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const release_date = formatDate(new Date(date));

    setUploadVideoFormData((prevData) => ({
      ...prevData,
      releaseDate: release_date,
    }));
  };

  const cancelUpload = () => {
    setShowModal(false);
    setUploadVideoFormData(defaultVideoFormData);
  };

  const handleVideoFormSubmit = (e) => {
    e.preventDefault();
    console.log(uploadVideoFormData);
    console.log("success");
    uploadVideo(uploadVideoFormData);
    setShowModal(false);
  };

  const uploadVideo = (newVideoDetails) => {
    postVideo(newVideoDetails);
  };

  return (
    <UploadModalContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedDate,
        uploadVideoFormData,
        handleVideoFormSubmit,
        cancelUpload,
        handleChange,
        handleDateChange,
        uploadVideo,
      }}
    >
      {children}
    </UploadModalContext.Provider>
  );
};

export { UploadModalContext, UploadModalProvider };
