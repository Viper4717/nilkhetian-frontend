import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Footer from './components/footer/Footer';
import StoreFront from './components/storeFront/StoreFront';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/store" component={StoreFront}/>
          </Switch> */}
          <StoreFront/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
