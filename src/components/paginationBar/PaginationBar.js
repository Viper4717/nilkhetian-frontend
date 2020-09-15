import React from 'react';
import './Pagination.css'
import { Pagination } from 'react-bootstrap';

function PaginationBar({maxLeft, maxRight, lastPage, currentPage, urlPath}) {

  const pageNumbers = [];

  for(let i=maxLeft; i<=maxRight; i++){
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} href={`${urlPath}${i}`}>
        {i}
      </Pagination.Item>
    );
  }

  return (
      <Pagination>
        <Pagination.First disabled={currentPage === 1} href={`${urlPath}1`}/>
        <Pagination.Prev disabled={currentPage === 1} href={`${urlPath}${currentPage-1}`}/>
          {pageNumbers}
        <Pagination.Next disabled={currentPage === lastPage} href={`${urlPath}${currentPage+1}`}/>
        <Pagination.Last disabled={currentPage === lastPage} href={`${urlPath}${lastPage}`}/>
      </Pagination>
  );
}

export default PaginationBar;