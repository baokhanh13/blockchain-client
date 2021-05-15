import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import NavbarContainer from '../../containers/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { removeSelectedMenu, setSelectedMenu } from '../../store/config';

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
    }
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const History = () => {
	const classes = useStyles();
	const wallet = useSelector((state) => state.wallet);
	const config = useSelector((state) => state.config);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSelectedMenu('history'));
		return () => {
			dispatch(removeSelectedMenu());
		};
	}, []);

	return (
		<>
			<NavbarContainer />
			<Container>
				<MainContainer>
					<Sidebar config={config} />
					<Body>
						<Title>Your transactions history</Title>
						<TableContainer component={Paper} className={classes.container}>
							<Table
								className={classes.table}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell className={classes.title}>
											Dessert (100g serving)
										</TableCell>
										<TableCell align="right" className={classes.title}>
											Calories
										</TableCell>
										<TableCell align="right" className={classes.title}>
											Fat&nbsp;(g)
										</TableCell>
										<TableCell align="right" className={classes.title}>
											Carbs&nbsp;(g)
										</TableCell>
										<TableCell align="right" className={classes.title}>
											Protein&nbsp;(g)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.name}>
											<TableCell
												component="th"
                                                scope="row"
                                                className={classes.text}
											>
												{row.name}
											</TableCell>
											<TableCell align="right" className={classes.text}>
												{row.calories}
											</TableCell>
											<TableCell align="right" className={classes.text}>
												{row.fat}
											</TableCell>
											<TableCell align="right" className={classes.text}>
												{row.carbs}
											</TableCell>
											<TableCell align="right" className={classes.text}>
												{row.protein}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Body>
				</MainContainer>
			</Container>
		</>
	);
};

export default History;
