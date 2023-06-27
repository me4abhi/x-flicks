import "./GenrePanel.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { genre_list, rating_list, sort_options } from "../../data/data.js";
import { useContext } from "react";
import { FilterVideosContext } from "../../context/FilterVideosContext";
import { SortVideosContext } from "../../context/SortVideosContext";

function GenrePanel() {
  let genre_element = ``;
  let rating_element = ``;

  const { selectedGenres, multiSelectGenre, selectedRating, uniSelectRating } =
    useContext(FilterVideosContext);
  const { handleSortOption } = useContext(SortVideosContext);

  genre_element = genre_list.map((genre) => {
    return (
      <span
        key={genre}
        className={selectedGenres.includes(genre) ? "pill-active" : "pill"}
        onClick={() => multiSelectGenre(genre)}
      >
        {genre}
      </span>
    );
  });

  rating_element = rating_list.map((rating) => (
    <span
      key={rating}
      className={selectedRating === rating ? "pill-active" : "pill"}
      onClick={() => uniSelectRating(rating)}
    >
      {rating}
    </span>
  ));

  return (
    <div id="filter-panel">
      <div id="filter-select-container">
        <div id="genre-select">{genre_element}</div>
        <div id="rating-select">{rating_element}</div>
      </div>
      <div id="sort-menu">
        <ImportExportIcon id="sort-icon" fontSize="medium" />
        <select name="sort-by" id="sort-by" defaultValue={'releaseDate'} onClick={handleSortOption}>
          {sort_options.map((option, index) => {
            if (index === 0) {
              return (
                <option key={option} value="releaseDate">
                  Release Date
                </option>
              );
            }
            return <option key={option} value="viewCount">View Count</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default GenrePanel;
