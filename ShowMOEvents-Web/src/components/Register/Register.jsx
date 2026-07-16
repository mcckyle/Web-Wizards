//****************************************************************************************
// Filename: Register.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the Register component for ShowMOEvents.
//****************************************************************************************

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/AuthService";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css"; //Import the custom CSS file

export default function Register()
{
    const { register, handleSubmit } = useForm({ mode: "onSubmit" });
    const navigate = useNavigate();
    const { setAccessToken, setUser } = useContext(AuthContext);
	const [errorMessage, setErrorMessage] = useState("");

	async function onSubmit(data) {
		setErrorMessage("");
		
		//Password Match Check.
		if ( (data.password) !== (data.confirmPassword) )
		{
			setErrorMessage("Passwords do not match!");
			return;
		}
		
		//Remove confirmPassword before sending the payload...
		const { confirmPassword, ...payload } = data;
        
        try
        {
			const response = await registerUser(payload);
			
			setAccessToken(response.accessToken);
			setUser({ username: response.username, email: response.email });
			
			navigate("/");
        }
        catch
        {
            setErrorMessage("Unable to create account. Please try again.");
        }
    }

    return (
	 <main className="register page fade-in">
        <form
		  className="register-form surface"
		  onSubmit={handleSubmit(onSubmit)}
		  noValidate
		  aria-labelledby="register-title"
		>
		  <header className="register-header">
            <h1 id="register-title">Create account</h1>
			<p className="register-subtitle">
			  Start finding events in a simple, focused space.
            </p>
		  </header>
			
		  <fieldset className="register-fields">
			<input
			  type="text"
			  placeholder="Username"
			  autoComplete="username"
			  {...register("username", { required: true })}  
			/>
			<input
			  type="email"
			  placeholder="Email"
			  autoComplete="email"
			  {...register("email", { required: true })}      
			/>
			<input
			  type="password"
			  placeholder="Password"
			  autoComplete="new-password"
			  {...register("password", { required: true })}
			/>
			<input
			  type="password"
			  placeholder="Confirm Password"
			  autoComplete="new-password"
			  {...register("confirmPassword", { required: true })}
			/>
		  </fieldset>
				  
		  {errorMessage && (
			<p className="register-error" role="alert">
			  {errorMessage}
			</p>
		  )}
		  
		  <button type="submit" className="button register-submit">
			Create account
		  </button>
         </form>
	    <footer className="auth-footer">
	      <p>
		    Already have an account?{" "}
		    <Link to="/login">
		      Sign in
		    </Link>
		  </p>
	    </footer>
	  </main>
    );
};