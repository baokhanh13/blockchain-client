import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import NavbarContainer from '../../containers/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';
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

const MainContainer = styled.div`
	flex-direction: row;
	display: flex;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 1.2rem;
`;

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	container: {
		marginTop: 20,
	},
	title: {
		fontSize: 14,
	},
	text: {
		fontSize: 12,
		whiteSpace: 'normal',
		wordWrap: 'break-word',
		maxWidth: 300,
	},
	cell: {},
});

const History = () => {
	const classes = useStyles();
	const wallet = useSelector((state) => state.wallet);
	const config = useSelector((state) => state.config);
	const [txs, setTxs] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSelectedMenu('history'));
		return () => {
			dispatch(removeSelectedMenu());
		};
	}, []);

	useEffect(() => {
		socket.emit('get-transactions', wallet.publicKey);
	}, []);

	useEffect(() => {
		socket.on('transactions', (transactions) => setTxs(transactions));
	}, []);

	function renderTxs() {
		console.log(txs);
		if (txs.length === 0) return null;
		return txs.map((tx, i) => {
			if (tx === null) return;
			return (
				<TableRow key={i}>
					<TableCell component="th" scope="row" className={classes.text}>
						{tx.fromAddress || 'eCoin'}
					</TableCell>
					<TableCell align="left" className={classes.text}>
						{tx.toAddress}
					</TableCell>
					<TableCell align="right" className={classes.text}>
						{tx.amount}
					</TableCell>
				</TableRow>
			)
		});
	}

	return (
		<>
			<NavbarContainer />
			<Container>
				<MainContainer>
					<Sidebar config={config} />
					<Body>
						<Title>Your transactions history</Title>
						<TableContainer
							component={Paper}
							className={classes.container}
						>
							<Table
								className={classes.table}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell className={classes.title}>
											From Adress
										</TableCell>
										<TableCell
											align="left"
											className={classes.title}
										>
											To Address
										</TableCell>
										<TableCell
											align="right"
											className={classes.title}
										>
											Amount
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>{renderTxs()}</TableBody>
							</Table>
						</TableContainer>
					</Body>
				</MainContainer>
			</Container>
		</>
	);
};

export default History;
