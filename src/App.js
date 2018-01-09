import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Friends from './components/Friends.js';
import NavBar from './components/NavBar.js';
import Profile from './components/Profile.js';
import Trending from './components/Trending.js';
import Tweets from './components/Tweets.js';
import CreateTweet from './components/CreateTweet.js';

function App(){
   return (
    <div>
      <Header />
      <NavBar />
      <Profile />
      <Friends />
      <Trending />
      <CreateTweet />
      <Tweets />
    </div>
  );
 }
export default App;
