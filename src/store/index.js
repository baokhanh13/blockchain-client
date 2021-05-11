import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import walletReducer from './wallet';
import configReducer from './config';

const reducer = combineReducers({
	wallet: walletReducer,
	config: configReducer
});

const store = configureStore({ reducer });

export default store;
