import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { FilterVideosContext } from '../../context/FilterVideosContext';

function SearchBar() {
  const {searchInput, handleInput, handleSubmit} = useContext(FilterVideosContext);
  
  return <form id='search-form' onSubmit={handleSubmit}>
    <input id="search-text" value={searchInput} onChange={handleInput} />
    <button>
        <SearchIcon id="search-icon" fontSize="string" />
    </button>
  </form>;
}

export default SearchBar;
