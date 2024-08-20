import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asserts/ShowMO.png';
import Logout from './logOut/LogOutAction'; // Import the Logout component

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    backgroundColor: '#f5f5dc',
  };

  const navStyle = {
    display: 'flex',
    gap: '10px',
  };

  const imgStyle = {
    width: '60px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '50%',
    objectFit: 'cover', // Changed from 'full' to 'cover' to fit the container
  };

  const titleStyle = {
    margin: '0',
    fontSize: '1.5em',
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="ShowMOEvents Logo" style={imgStyle} />
        <h1 style={titleStyle}>ShowMOEvents</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/home">Home</Link>
        <Link to="/my-profile">My Profile</Link>
        <Link to="/create-post">Post</Link>
        <Link to="/event-manager">Event</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Connect</Link>
        {/* Add the Logout component */}
        <Logout /> {/* This will render the Logout button */}
      </nav>
    </header>
  );
};

export default Header;
