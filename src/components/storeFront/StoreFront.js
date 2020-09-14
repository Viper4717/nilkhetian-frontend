import React, { useState, useEffect } from 'react';
import './StoreFront.css';
import BookStoreImage from '../../assets/bookStore/bookStore.jpg'
import StoreCard from './StoreCard'
import PaginationBar from '../paginationBar/PaginationBar'
import { Container, Button} from 'react-bootstrap';
import Axios from 'axios';
import { serverUrl } from '../../util';

var firstCategory = "Fiction";

function categoryParse(item){
  var words = item.split(" ");
  var catName = "";
  for(var i = 0; i < words.length; i++){
      if(i > 0){
          catName += ('+' + words[i]);
      }
      else{
          catName += words[i];
      }
  }
  return catName;
}

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
      storeCategories: store.categories,
    }));
    setStores(newStores);
  })
  .catch((error) => {
    console.error(error);
    console.log('failed to load stores');
  });
  Axios
    .get(`${serverUrl}/products`)
    .then(({data: res}) => {
        console.log(res[0]);
        firstCategory = categoryParse(res[0]);
        console.log(firstCategory);
    })
    .catch((error) => {
        console.error(error);
        console.log('failed to load first category');
    });
}

function StoreFront() {
    const [stores, setStores] = useState([]);
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
        <Container fluid="md" className="parentContainer smallHeight">
            <h2 className="storeHeader"> Nilkhet Online: Store Front </h2>
            <div className="topButtonDiv">
                <Button className="bookCategoryButton" variant="custom" 
                href={`/products?category=${firstCategory}`}>
                    Browse Books/Stationaries
                </Button>
            </div>
            <div className="storeGrid">
                {currentStores.map(store => (
                    <StoreCard storeId={store.id} storeName={store.storeName} storeImgPath={store.storeImgPath}
                     storeDetails={store.storeDetails} storeCategories={store.storeCategories} />
                ))}
            </div>
            <div className="paginationDiv">
              <PaginationBar lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </Container>
    );
}

export default StoreFront;
