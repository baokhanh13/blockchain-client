import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavbarContainer from '../../containers/Navbar';

const Container = styled.div`
	min-height: calc(100vh - 4rem);
	width: 80%;
	margin: auto;
`;

const Title = styled.h2`
	font-size: 1.6rem;
	margin: 1rem 0 2rem 0;
	line-height: 1.4;
	color: blue;
`;

const Button = styled.button`
	background-color: #cd5441;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	color: white;
	border: none;
	outline: none;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
`;

const Dashboard = () => {
	const wallet = useSelector((state) => state.wallet);
	return (
		<>
			<NavbarContainer />
			<Container>
				<Title>My Dashboard </Title>
                <div>{wallet.publicKey}</div>
			</Container>
		</>
	);
};

export default Dashboard;
