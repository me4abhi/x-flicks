import { createContext, useState, useEffect } from "react";

const FilterVideosContext = createContext();

const FilterVideosProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    const constructFilterEndpoint = () => {
      let genreEndpoint = "";
      let ratingEndpoint = "";
      let searchEndpoint = "";
      let finalEndpointArray = [];
      let finalEndpointString = "";

      if (searchInput.length > 0) {
        searchEndpoint = "title=" + searchInput;
        finalEndpointArray.push(searchEndpoint);
      }
      if (selectedGenres.length > 0) {
        genreEndpoint = "genres=" + selectedGenres.join(",");
        finalEndpointArray.push(genreEndpoint);
      }
      if (selectedRating.length > 0) {
        const ratingEncoded = selectedRating.replace("+", "%2B");
        ratingEndpoint = "contentRating=" + ratingEncoded;
        finalEndpointArray.push(ratingEndpoint);
      }

      if (finalEndpointArray.length > 0) {
        finalEndpointString = finalEndpointArray.join("&");
      }
      setSearchParams(finalEndpointString);
    };
    constructFilterEndpoint();
  }, [searchInput, selectedGenres, selectedRating]);

  const handleInput = (e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const multiSelectGenre = (currentGenre) => {
    if (selectedGenres.includes(currentGenre)) {
      setSelectedGenres(
        selectedGenres.filter((genre) => genre !== currentGenre)
      );
    } else {
      setSelectedGenres([...selectedGenres, currentGenre]);
    }
  };

  const uniSelectRating = (currentRating) => {
    if (selectedRating === currentRating) {
      setSelectedRating("");
    } else {
      setSelectedRating(currentRating);
    }
  };

  return (
    <FilterVideosContext.Provider
      value={{
        searchParams,
        selectedGenres,
        multiSelectGenre,
        selectedRating,
        uniSelectRating,
        searchInput,
        handleInput,
        handleSubmit,
      }}
    >
      {children}
    </FilterVideosContext.Provider>
  );
};

export { FilterVideosContext, FilterVideosProvider };
