//****************************************************************************************
// Filename: App.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the entry point for ShowMOEvents.
//****************************************************************************************

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from "./components/auth/PrivateRoute";

import Header from './components/Header/Header';
import PostForm from './PostForm';
import UserProfile from './UserProfile';
import EventSearch from './components/EventSearch/EventSearch';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';
import CreatePost from './pages/CreatePost';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EventManager from './pages/EventManager';

import "./App.css";

const App = () => {
	const [posts, setPosts] = useState([]);
    const [showComments, setShowComments] = useState({});

    // Fetch posts and handle comments visibility
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch posts!');
                }
            } catch (error) {
                console.error('There was an error fetching the posts!', error);
            }
        };
        fetchPosts();
    }, []);

    const handleToggleComments = postId => {
        setShowComments(prevState => ({
            ...prevState,
            [postId]: !prevState[postId] || false,
        }));
    };

    const handleEdit = async (post) => {
        const updatedPost = { title: 'Updated Title', content: 'Updated Content' };
        try {
            const response = await fetch(`/api/posts/${post.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedPost),
            });
            if (response.ok) {
                const updatedData = await response.json();
                setPosts(prevPosts => prevPosts.map(p => (p.id === post.id ? updatedData : p)));
                console.log('Post updated successfully!');
            } else {
                console.error('Failed to update the post!');
            }
        } catch (error) {
            console.error('There was an error updating the post!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
                console.log('Post deleted successfully!');
            } else {
                console.error('Failed to delete the post!');
            }
        } catch (error) {
            console.error('There was an error deleting the post!', error);
        }
    };

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };
	
	return (
        <BrowserRouter>
		  <div className="app-shell">
		    <div className="app-background">
			  <div className="ambient ambient-primary" />
			  <div className="ambient ambient-secondary" />
			</div>
			<div className="app">
			  <Header />
			  <main className="main">
                <Routes>
                {/* 1. Public Routes. */}
                <Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<ContactUs />} />
				
				{/* 2. Protected Routes. */}
				<Route path="/create-post" element={<PrivateRoute element={<PostForm />} />} />
				<Route path="/event-manager" element={<PrivateRoute element={<EventManager />} />} />
				<Route path="/profile" element={<PrivateRoute element={<UserProfile />} />} />
				<Route path="/search" element={<PrivateRoute element={<EventSearch />} />} />
				<Route path="/settings" element={<PrivateRoute element={<Settings />} />} />

                {/* 3. Fallback Route. */}
				<Route
					path="*"
					element={
						<section className="not-found page page-centered fade-in">
						  <h1 className="page-title">404</h1>
						  <h2>Page not found</h2>
						  <p className="page-subtitle">
						    The page you're looking for does not exist or may have been moved.
						  </p>
						</section>
					}
				  />
            </Routes>
		  </main>
		 </div>
		</div>
       </BrowserRouter>
    );
};

export default App;
