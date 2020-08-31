import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Registration/>
    </div>
  );
}

export default App;
