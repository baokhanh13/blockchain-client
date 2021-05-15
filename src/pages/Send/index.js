import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import NavbarContainer from '../../containers/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
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

const Body = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
    margin: 1.2rem;
    
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
    margin-top: 1rem;
`;

const Input = styled.input`
	text-align: left;
	display: block;
	width: 100%;
	padding: 4px 0;
	margin-bottom: 1.625rem;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 1.5;
	color: #000;
	background-color: #f9f9f9;
	background-image: none;
	border: 1px solid #fff;
`;

const useStyles = makeStyles({
	card: {
		maxWidth: 400,
	},
});

const Send = () => {
	const classes = useStyles();
	const wallet = useSelector((state) => state.wallet);
	const config = useSelector((state) => state.config);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSelectedMenu('send'));
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
						<Title>Send your coin to other wallet</Title>
						<FormContainer>
                            <Title>Amount</Title>
                            <Input type="number"/>
                            <Title>Adress</Title>
                            <Input/>
                            <Button type="submit">Send</Button>
						</FormContainer>
					</Body>
				</MainContainer>
			</Container>
		</>
	);
};

export default Send;
