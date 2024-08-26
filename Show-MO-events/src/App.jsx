import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PostForm from './PostForm';
import UserProfile from './UserProfile';
import SearchProfile from './SearchProfile';
import LoginForm from './components/loginForm/LoginForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import PasswordResetForm from './components/passwordReset/PasswordResetForm';
import Layout from './pages/Layout';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EventManager from './pages/EventManager';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
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

    // Higher Order Component to protect private routes
    const PrivateRoute = ({ element }) => {
        return authenticated ? element : <Navigate to="/" replace />;
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LoginForm setAuthenticated={setAuthenticated} />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/forgot-password" element={<PasswordResetForm />} />

                {/* Private Routes */}
                    <Route path="/" element={<Layout />}>
                    <Route path="home" element={<PrivateRoute element={<Home />} />} />
                    <Route path="create-post" element={<PrivateRoute element={<CreatePost />} />} />
                    <Route path="event-manager" element={<PrivateRoute element={<EventManager />} />} />
                    <Route path="about-us" element={<PrivateRoute element={<AboutUs />} />} />
                    <Route path="contact-us" element={<PrivateRoute element={<ContactUs />} />} />
                    <Route path="profile" element={<PrivateRoute element={<UserProfile />} />} />
                    <Route path="search" element={<PrivateRoute element={<SearchProfile />} />} />
                </Route>

                {/* Fallback route for unauthorized access */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
