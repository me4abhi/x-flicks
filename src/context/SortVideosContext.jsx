import { createContext, useEffect, useState } from "react";

const SortVideosContext = createContext();

const SortVideosProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState("releaseDate");
  const [sortParams, setSortParams] = useState("sortBy=" + sortBy);

  useEffect(() => {
    let sortEndpoint = "sortBy=" + sortBy;
    setSortParams(sortEndpoint);
  }, [sortBy]);

  const handleSortOption = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <SortVideosContext.Provider
      value={{
        setSortBy,
        handleSortOption,
        sortParams,
      }}
    >
      {children}
    </SortVideosContext.Provider>
  );
};

export { SortVideosContext, SortVideosProvider };
