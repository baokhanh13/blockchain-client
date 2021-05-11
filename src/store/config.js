import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'config',
	initialState: {
		categories: ['Dashboard', 'Send', 'History'],
		selected: null,
	},
	reducers: {
		setMenu: (state, action) => {
			if (
				state.categories.find(
					(category) => category.toLowerCase() === action.payload,
				)
			) {
				state.selected = action.payload;
			}
		},
		removeMenu: (state, action) => {
			state.selected = null;
		},
	},
});

const { setMenu, removeMenu } = slice.actions;

export const setSelectedMenu = (name) => (dispatch) => {
	if (!name) {
		dispatch(removeMenu());
	} else {
		dispatch(setMenu(name));
	}
};

export const removeSelectedMenu = () => (dispatch) => {
	dispatch(removeMenu());
};

export default slice.reducer;
