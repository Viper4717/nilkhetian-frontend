import React from 'react';
import './Pagination.css'
import { Pagination } from 'react-bootstrap';

function PaginationBar({lastPage, currentPage, setCurrentPage}) {

  const pageNumbers = [];

  for(let i=1; i<=lastPage; i++){
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
      <Pagination>
        <Pagination.First disabled={currentPage === 1} onClick={() => setCurrentPage(1)}/>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage((p)=>(p-1))}/>
          {pageNumbers}
        <Pagination.Next disabled={currentPage === lastPage} onClick={() => setCurrentPage((p)=>(p+1))}/>
        <Pagination.Last disabled={currentPage === lastPage} onClick={() => setCurrentPage(lastPage)}/>
      </Pagination>
  );
}

export default PaginationBar;