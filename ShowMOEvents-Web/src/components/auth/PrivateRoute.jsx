//****************************************************************************************
// Filename: PrivateRoute.jsx
// Date: 16 July 2026
// Author: Kyle McColgan
// Description: This file contains the wrapper for private routes for ShowMOEvents.
//****************************************************************************************

import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//PrivateRoute Component.
const PrivateRoute = ({ element }) => {
	const authorized = useAuth();
	
	if (authorized === null)
	{
		return (
		  <section className="loading-screen fade-in">
		    <div className="loading-spinner" />
			<p>Signing you in…</p>
		  </section>
		);
	}
	
	if (!authorized)
	{
		return <Navigate to="/login" replace />;
	}
	
    return element;
};

export default PrivateRoute;