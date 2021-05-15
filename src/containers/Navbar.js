import React from 'react';
import { Navbar } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/wallet';


const NavbarContainer = () => {
	const wallet = useSelector((state) => state.wallet);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logout());
	};
	return (
		<Navbar>
			{!!wallet.publicKey ? (
				<Navbar.Logo to="/dashboard">eCoinWallet</Navbar.Logo>
			) : (
				<Navbar.Logo to="/">eCoinWallet</Navbar.Logo>
			)}
			{!!wallet.publicKey ? (
				<Navbar.Links>
					<Navbar.Button onClick={handleClick}>Logout</Navbar.Button>
				</Navbar.Links>
			) : (
				<Navbar.Links>
					<Navbar.Item to="/register">Register</Navbar.Item>
					<Navbar.Item to="/login">Login</Navbar.Item>
				</Navbar.Links>
			)}
		</Navbar>
	);
};

export default NavbarContainer;
