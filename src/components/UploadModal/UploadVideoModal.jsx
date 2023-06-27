import "./UploadVideoModal.css";
import { useContext } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { genre_list, rating_list } from "../../data/data";
import { UploadModalContext } from "../../context/UploadModalContext";

function UploadVideoModal() {
  const { selectedDate, uploadVideoFormData, cancelUpload, handleChange, handleDateChange, handleVideoFormSubmit } = useContext(UploadModalContext);
  
  return (
    <div id="upload-video-modal">
      <form id="upload-video-form" onSubmit={handleVideoFormSubmit}>
        <div id="upload-video-form-header">
          <h2 id="upload-video-form-title">Upload Video</h2>
          <CloseIcon id="upload-video-form-close" onClick={cancelUpload} />
        </div>
        <TextField
          id="outlined-helperText"
          label="Video Link"
          helperText="This link will be used to derive the video"
          name="videoLink"
          value={uploadVideoFormData.videoLink}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-helperText"
          label="Thumbnail Image Link"
          helperText="This link will be used to preview the thumbnail image"
          name="previewImage"
          value={uploadVideoFormData.previewImage}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-helperText"
          label="Title"
          helperText="The title will be the representative text for video"
          name="title"
          value={uploadVideoFormData.title}
          onChange={handleChange}
          required
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Genre"
            name="genre"
            value={uploadVideoFormData.genre}
            onChange={handleChange}
            required
          >
            {
              genre_list.map((genre, index) => <MenuItem key={index} value={genre}>{genre}</MenuItem>)
            }
          </Select>
          <FormHelperText>
            Genre will help in categorizing your videos
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            name="contentRating"
            value={uploadVideoFormData.contentRating}
            onChange={handleChange}
            required
          >
            {
              rating_list.map((rating, index) => <MenuItem key={index} value={rating}>{rating}</MenuItem>)
            }
          </Select>
          <FormHelperText>
            This will be used to filter videos on age group suitability
          </FormHelperText>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            label="Upload and Publish Date"
            disablePast
            required
            slotProps={{
              textField: {
                required: true,
              },
            }}
          />
        </LocalizationProvider>

        <div id="form-action-buttons">
          <Button type="submit" id="upload-button" variant="contained">
            Upload
          </Button>
          <Button
            id="cancel-upload-button"
            variant="text"
            onClick={cancelUpload}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideoModal;
