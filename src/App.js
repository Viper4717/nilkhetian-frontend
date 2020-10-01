import React, { useEffect, useContext } from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Response from './components/registration/Response';
import Footer from './components/footer/Footer';
import StoreFront from './components/storeFront/StoreFront';
import BookLibrary from './components/bookLibrary/BookLibrary';
import StoreBrowse from './components/storeBrowse/StoreBrowse';
import Search from './components/search/Search';
import Result from './components/result/Result';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Cart from './components/cart/Cart';
import Shipping from './components/shipping/Shipping';
import Confirmation from './components/shipping/Confirmation';
import { CartContext, UserContext } from './Contexts';
import history from './History';
import Axios from 'axios';
import { serverUrl } from './util';

function loadCartFromStorage(setCart){
  var storageCart = localStorage.getItem("cart");
  storageCart = JSON.parse(storageCart);
  if(storageCart != null && storageCart.length){
    setCart(storageCart);
  }
}

function loadUserFromStorage(setUser){
  var storageUser = localStorage.getItem("user");
  storageUser = JSON.parse(storageUser);
  if(storageUser != null){
    const tokenObject = {
      token: storageUser.refreshToken
    }
    Axios.post(`${serverUrl}/api/token/refresh`, tokenObject)
    .then(({data: res}) => {
      storageUser.refreshToken = res.refreshToken;
      storageUser.confirmed = res.confirmed;
      setUser(storageUser);
      localStorage.setItem("user", JSON.stringify(storageUser));
    })
    .catch((error) => {
      console.log(error);
      storageUser = null;
      localStorage.setItem("user", JSON.stringify(storageUser));
      setUser(storageUser);
    });
  }
}

function App() {

  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    loadCartFromStorage(setCart);
    loadUserFromStorage(setUser);
  }, [])

  return (
    <div className="App">
        <Router history={history}>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" render={() => (user? <Redirect to="/profile"/> : <Login/> )} />
              <Route path="/profile" render={() => (user? <Profile/> : <Redirect to="/login"/> )}/>
              <Route exact path="/profile/edit" render={() => (user? <EditProfile/> : <Redirect to="/login"/> )}/>
              <Route path="/registration" render={() => (user? <Redirect to="/profile"/> : <Registration/> )}/>
              <Route path="/response" component={Response}/>
              <Route path="/stores" component={StoreFront}/>
              <Route path="/products" component={BookLibrary}/>
              <Route path="/store" component={StoreBrowse}/>
              <Route path="/search" component={Search}/>
              <Route path="/results" component={Result}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/shipping" render={() => ((user == null || !user.confirmed)? <Redirect to="/cart"/> : <Shipping/> )}/>
              <Route path="/confirmation" render={() => ((user == null || !user.confirmed)? <Redirect to="/cart"/> : <Confirmation/> )}/>
            </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
