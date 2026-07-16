//****************************************************************************************
// Filename: Login.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the Login component for ShowMOEvents.
//****************************************************************************************

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css"; //Import the custom CSS file.

export default function Login()
{
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	const { register, handleSubmit } = useForm({ mode: "onSubmit" });
	const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(data) {
		setErrorMessage("");
		
		try
		{
			await login(data);
			navigate("/");
		}
		catch
		{
			setErrorMessage("Unable to sign in. Please check your details.");
		}
	}

    return (
	  <main className="login page fade-in">
		<form
		  className="login-form surface"
		  onSubmit={handleSubmit(onSubmit)}
		  noValidate
		  aria-labelledby="login-title"
		>
		 <header className="login-header">
			<h1 id="login-title">Welcome back</h1>
			<p className="login-subtitle">
			  Sign in to continue where you left off.
			</p>
		 </header>
			
		<div className="login-fields">
		  <input
		    type="email"
			placeholder="Email"
			autoComplete="email"
			{...register("email", { required: true })}
		  />
		  <input
		    type="password"
			placeholder="Password"
			autoComplete="current-password"
			{...register("password", { required: true })}
		  />
		</div>
		
		{errorMessage && (
			<p className="login-error" role="alert">
			  {errorMessage}
			</p>
		)}
		
		<button type="submit" className="button login-submit">
			Sign in
		</button>
	  </form>
	  <footer className="auth-footer">
	    <p>
		  Don't have an account?{" "}
		  <Link to="/register">
		    Create one
		  </Link>
		</p>
	  </footer>
	</main>
    );
};