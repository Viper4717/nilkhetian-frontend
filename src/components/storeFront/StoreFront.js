import React, { useState, useEffect } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import PaginationBar from '../paginationBar/PaginationBar'
import { Container, Button} from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';

const bodyParser = require("body-parser")

function loadStores(setStores, setTotalStores){
  Axios
  .get(`${serverUrl}/stores`)
  .then(({data: res}) => {
    setTotalStores(res.length);
    const newStores = res.map((store) => ({
      id: store._id,
      storeName: store.storeName,
      storeImgPath: BookStoreImage,
      storeDetails: store.storeDetails,
    }));
    setStores(newStores);
  })
  .catch((error) => {
    console.error(error);
    console.log('failed to load stores');
  });
}

function StoreFront() {
    const [stores, setStores] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalStores, setTotalStores] = useState(1);

    useEffect(() => {
      loadStores(
        setStores,
        setTotalStores,
      );
    }, []);

    const storesPerPage = 12;
    const lastPage = Math.ceil(totalStores/storesPerPage);
    const indexOfLastPost = currentPage * (storesPerPage > totalStores? totalStores : storesPerPage);
    const indexofFirstPost = indexOfLastPost - (storesPerPage > totalStores? totalStores : storesPerPage);
    const currentStores = stores.slice(indexofFirstPost, indexOfLastPost);

    return (
        <Container fluid="md" className="parentContainer smallHeight padBottomContainer">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom" href="/books">
                    Search by Book Categories
                </Button>
            </div>
            <div className="storeGrid">
                {currentStores.map(store => (
                    <StoreCard storeId={store.id} storeName={store.storeName} storeImgPath={store.storeImgPath}
                     storeDetails={store.storeDetails} />
                ))}
            </div>
            <div className="paginationDiv">
              <PaginationBar lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </Container>
    );
}

export default StoreFront;
