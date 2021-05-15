import { createSlice } from '@reduxjs/toolkit';
import history from '../utils/history';
import api from 'axios';

const initKey = localStorage.getItem('key')
	? localStorage.getItem('key')
	: null;

const slice = createSlice({
	name: 'wallet',
	initialState: {
		publicKey: initKey,
		privateKey: null,
		loading: false,
		errorMsg: null,
	},
	reducers: {
		loginRequest: (state, action) => {
			state.loading = true;
		},
		signupRequest: (state, action) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.publicKey = action.payload;
			state.loading = false;
		},
		signupSuccess: (state, action) => {
			state.errorMsg = null;
			state.loading = false;
			state.privateKey = action.payload;
		},
		loginFailure: (state, action) => {
			state.errorMsg = action.payload;
			state.loading = false;
		},
		signupFailure: (state, action) => {
			state.errorMsg = action.payload;
			state.loading = false;
		},
		logoutSuccess: (state, action) => {
			state.publicKey = null;
			state.loading = false;
			state.errorMsg = null;
			state.privateKey = null;
		},
		removePrivateKey: (state, action) => {
			state.privateKey = null;
		},
	},
});

const {
	removePrivateKey,
	loginRequest,
	signupRequest,
	loginSuccess,
	signupSuccess,
	loginFailure,
	signupFailure,
	logoutSuccess,
} = slice.actions;

export const login = (credentials) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const res = await api.post('/wallets/login', credentials);
		const { publicKey } = res.data;
		dispatch(loginSuccess(publicKey));
		localStorage.setItem('key', publicKey);
		history.push('/dashboard');
	} catch (error) {
		dispatch(loginFailure(error.response.data.message));
	}
};

export const signup = (credentials) => async (dispatch) => {
	try {
		dispatch(signupRequest());
		const res = await api.post('/wallets/register', credentials);
		const { privateKey } = res.data;
		dispatch(signupSuccess(privateKey));
	} catch (error) {
		dispatch(signupFailure(error.response.data.message));
	}
};

export const logout = () => (dispatch) => {
	dispatch(logoutSuccess());
	localStorage.removeItem('key');
};

export const removeKey = () => (dispatch) => {
	dispatch(removePrivateKey());
};

export default slice.reducer;
