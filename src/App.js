import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import VerifyMail from './components/registration/VerifyMail';
import MailExists from './components/registration/MailExists';
import Footer from './components/footer/Footer';
import StoreFront from './components/storeFront/StoreFront';
import BookLibrary from './components/bookLibrary/BookLibrary';
import StoreBrowse from './components/storeBrowse/StoreBrowse';
import Search from './components/search/Search';
import Result from './components/result/Result';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Header/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/stores" component={StoreFront}/>
                <Route path="/products" component={BookLibrary}/>
                <Route path="/store" component={StoreBrowse}/>
                <Route path="/search" component={Search}/>
                <Route path="/results" component={Result}/>
                <Route path="/cart" component={Cart}/>
              </Switch>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
