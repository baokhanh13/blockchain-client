import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import NavbarContainer from '../../containers/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { removeSelectedMenu, setSelectedMenu } from '../../store/config';
import socket from '../../utils/socket';

const Container = styled.div`
	min-height: calc(100vh - 4rem);
	width: 80%;
	margin: auto;
`;

const Title = styled.h2`
	font-size: 1.6rem;
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
    max-width: 200px;
    margin: 1rem auto;
`;

const MainContainer = styled.div`
	flex-direction: row;
	display: flex;
`;

const CardTitle = styled.p`
	font-size: 1.4rem;
	color: #ccc;
`;

const CardText = styled.p`
	font-size: 1.2rem;
	overflow-wrap: break-word;
`;

const CardBody = styled.div`
	display: flex;
	padding: 0 4rem;
	margin: 1.2rem;
	justify-content: space-around;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const MiningContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 10rem;
`;

const MiningText = styled.h4`
    font-size: 1.6rem;
    font-style: bold;
`;

const useStyles = makeStyles({
	card: {
		width: 400,
	},
});

const Dashboard = () => {
	const classes = useStyles();
	const [walletBalance, setWalletBalance] = useState(0);
	const wallet = useSelector((state) => state.wallet);
	const config = useSelector((state) => state.config);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSelectedMenu('dashboard'));
		return () => {
			dispatch(removeSelectedMenu());
		};
	}, []);

	useEffect(() => {
		socket.emit('get-balance', wallet.publicKey);
	}, []);

	useEffect(() => {
		socket.on('balance', balance => {
			setWalletBalance(balance);
		})
	}, []);


	const miningBlock = () => {
		socket.emit('mine', wallet.publicKey);
	};

	return (
		<>
			<NavbarContainer />
			<Container>
				<MainContainer>
					<Sidebar config={config} />
					<Body>
						<CardBody>
							<Card className={classes.card}>
								<CardContent>
									<CardTitle>Address</CardTitle>
									<CardText>{wallet.publicKey}</CardText>
								</CardContent>
							</Card>
							<Card className={classes.card}>
								<CardContent>
									<CardTitle>Balance</CardTitle>
									<CardText>{walletBalance}</CardText>
								</CardContent>
							</Card>
						</CardBody>
						<MiningContainer>
                            <Title>Mining</Title>
                            <MiningText>You can start mining here. Each time you mine a block, you are rewarded by 100 eCoins</MiningText>
                            <Button onClick={miningBlock}>Mining</Button>
						</MiningContainer>
					</Body>
				</MainContainer>
			</Container>
		</>
	);
};

export default Dashboard;
