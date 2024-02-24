import React from 'react';
import '../style.css'

const Pagination = ({ handleNextPage, handlePrevPage, prevPage, nextPage }) => {
  return (
    <div className="pagination">
      {prevPage && <button onClick={handlePrevPage}>Previous</button>}
      {nextPage && <button onClick={handleNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
