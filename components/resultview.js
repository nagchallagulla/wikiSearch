function ResultView(props) {
    const { selectedResult, handleBack, handleViewMore } = props; 
    return (
    <div class="p-3">
        <h1>{selectedResult.title}</h1>
        <p>{selectedResult.snippet}</p>
        <div class="d-flex justify-content-between">
        <button  onClick={handleBack}>Back</button>
        <button  onClick={handleViewMore}>View More</button>
        </div>
        </div>
    );
}
export default ResultView;