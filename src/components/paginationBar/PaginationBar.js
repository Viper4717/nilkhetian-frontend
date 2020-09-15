import React from 'react';
import './Pagination.css'
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaginationBar({maxLeft, maxRight, lastPage, currentPage, urlPath}) {

  const pageNumbers = [];

  for(let i=maxLeft; i<=maxRight; i++){
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} >
        <Link to={`${urlPath}${i}`}>
          {i}
        </Link>
      </Pagination.Item>
    );
  }

  return (
      <Pagination>
        
        <Pagination.Item disabled={currentPage === 1}>
          <Link to={`${urlPath}1`}> {`<<`} </Link>
        </Pagination.Item>
        <Pagination.Item disabled={currentPage === 1}>
          <Link to={`${urlPath}${currentPage-1}`}> {`<`} </Link>
        </Pagination.Item>
          {pageNumbers}
        <Pagination.Item disabled={currentPage === lastPage}>
          <Link to={`${urlPath}${currentPage+1}`}> {`>`} </Link>
        </Pagination.Item>
        <Pagination.Item disabled={currentPage === lastPage}>
          <Link to={`${urlPath}${lastPage}`}> {`>>`} </Link>
        </Pagination.Item>
      </Pagination>
  );
}

export default PaginationBar;