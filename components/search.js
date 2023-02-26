import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SearchForm from './searchForm';
import ResultView from './resultview';
function Search() {
  const [fetchData, setFetchData] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  
  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${fetchData}&format=json&origin=*`)
      .then(response => {
        setSearchResults(response.data.query.search.slice(0, 5));
        setSelectedResult(null);
      })
  }
  function handleResultClick(result) {
    setSelectedResult(result);
  }
  function handleViewMore() {
    window.open(`https://en.wikipedia.org/?curid=${selectedResult.pageid}`, '_blank');
  }
  function handleBack() {
    setSelectedResult(null);
  } 
  
  return (
  <div>
    {!selectedResult ? (
    <SearchForm fetchData={fetchData} setFetchData={setFetchData} handleSearch={handleSearch} searchResults={searchResults} handleResultClick={handleResultClick} />
    ) : (<ResultView selectedResult={selectedResult} handleBack={handleBack} handleViewMore={handleViewMore} />
    )}
    </div>
  );
}
export default Search;