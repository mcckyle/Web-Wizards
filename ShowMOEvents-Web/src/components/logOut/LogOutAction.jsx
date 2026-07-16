import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Perform logout by sending a request to the backend
      const response = await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Ensure cookies are sent
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Clear client-side tokens or session data
        localStorage.clear(); // Clears all data in localStorage
        sessionStorage.clear(); // Clears all data in sessionStorage

        // Optionally, clear cookies (if cookies are set directly in your app)
        // This is a workaround as direct clearing cookies may not be supported by JS in all cases.
        document.cookie.split(';').forEach((c) => {
          document.cookie = c.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        });

        // Show a success message
        setLogoutMessage('You have been logged out successfully.');

        // Redirect to the root path after a short delay to show the message
        setTimeout(() => {
          setLogoutMessage(''); // Clear the message
          navigate('/'); // Redirect to the Login page
        }, 2000); // 2-second delay
      } else {
        // Handle any errors from the backend
        setLogoutMessage('Failed to log out. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error during logout:', error);
      setLogoutMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Logout link */}
      <a href="#" onClick={e => { e.preventDefault(); handleLogout(); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
        Logout
      </a>

      {/* Show the logout message if it exists */}
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default Logout;
