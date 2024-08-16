// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginForm from './components/loginForm/LoginForm';
import PasswordResetForm from './components/passwordReset/PasswordResetForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import EventManager from './pages/EventManager';
import Myprofile from './pages/Myprofile'; // Match the import name with your file name


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The LandingPage is the root route */}
        <Route path="/" element={<LandingPage />} />

        {/* Layout as the parent route for nested routes */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="my-profile" element={<Myprofile />} /> 
          <Route path="create-post" element={<CreatePost />} />
          <Route path="event-manager" element={<EventManager />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="forgot-password" element={<PasswordResetForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
