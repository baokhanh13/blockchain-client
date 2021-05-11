import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/global';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
