import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Footer from './components/footer/Footer';
import StoreFront from './components/storeFront/StoreFront';
import BookLibrary from './components/bookLibrary/BookLibrary';
import StoreBrowse from './components/storeBrowse/StoreBrowse';
import Result from './components/result/Result';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/stores" component={StoreFront}/>
            <Route path="/books" component={BookLibrary}/>
            <Route path="/store/:storeId" component={StoreBrowse}/>
            <Route path="/results" component={Result}/>
          </Switch> */}
          <Profile/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
