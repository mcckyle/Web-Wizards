//src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostForm from './PostForm';
import PostList from './PostList';

const Routes = () => {
    return (
	<Switch>
	<PrivateRoute path = "/create" component = {PostForm} />
	</Switch>
	);
}

export default Routes;
