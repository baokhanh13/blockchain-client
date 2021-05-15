import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Login from './pages/Login';
import Send from './pages/Send';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import history from './utils/history';

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<PublicRoute exact path="/" component={Welcome} restricted />
				<PublicRoute exact path="/login" component={Login} restricted/>
				<Route
					exact
					path="/register"
					component={Signup}
					restricted
				/>
				<PrivateRoute
					exact
					path="/dashboard"
					component={Dashboard}
				/>
				<PrivateRoute
					exact
					path="/send"
					component={Send} />
				<PrivateRoute exact path="/history" component={History} />
			</Switch>
		</Router>
	);
};

export default App;
