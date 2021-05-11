import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import walletReducer from './wallet';

const reducer = combineReducers({
	wallet: walletReducer,
});

const store = configureStore({ reducer });

export default store;
