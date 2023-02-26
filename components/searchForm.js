function SearchForm(props){
    const { fetchData, setFetchData, handleSearch, searchResults, handleResultClick } = props;
    return (
    <div>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Search Here' value={fetchData} onChange={event => setFetchData(event.target.value)} />
        {searchResults.length === 0 && <p>No Items Found!</p>}
        </form>
        <ul style={{ listStyleType: "none", padding: "25px" }}>
        {searchResults.map(result => (
            <li key={result.pageid}>
            <div class="d-flex justify-content-between m-3 border">
            <h3 class="">{result.title}</h3>
            <button class="btn btn-link" onClick={() => handleResultClick(result)}>Launch</button>
            </div>
            </li>
            ))}
            </ul>
            </div>
    );
}
export default SearchForm;