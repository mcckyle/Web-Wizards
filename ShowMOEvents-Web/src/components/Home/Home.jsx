//****************************************************************************************
// Filename: Home.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the Home page for ShowMOEvents.
//****************************************************************************************

import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

import './Home.css';

const Home = () => {
	return (
    <div className="container">
      <h1 className="title">Welcome to ShowMOEvents!</h1>
      <p className="subtitle">Your local go-to app!</p>
      <ImageSlider />
      <p>
        Discover what's happening across Missouri!
		Find community gatherings, festivals, concerts, fundraisers, and local events -
		all in one place.
		Share your own events and stay connected with your community.
	  </p>
    </div>
  );
};

export default Home;