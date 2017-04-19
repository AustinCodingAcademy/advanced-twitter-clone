import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

function App(){
   return (
    <div id="main">
      <Header />
      <Main />
    </div>
  );
 }
export default App;
