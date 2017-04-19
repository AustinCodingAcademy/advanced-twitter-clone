import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(){
   return (
    <div id="header">
    I am the header
  </div>);
}

function Main(){
  return (
    <div id="main">
    main
    </div>
    );
}

 function App(){
   return (
    <div id="main">
      <Header />
      <Main />
    </div>
  );
 }

export default App;
