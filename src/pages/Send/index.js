import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import NavbarContainer from '../../containers/Navbar';
import { useForm } from 'react-hook-form';
import { removeSelectedMenu, setSelectedMenu } from '../../store/config';
import socket from '../../utils/socket';
import { Form } from '../../components';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

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

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const ModalTitle = styled.h2`
	font-size: 1.6rem;
	line-height: 1.4;
	color: blue;
`;

const Send = () => {
	const { register, handleSubmit, errors } = useForm();
	const config = useSelector((state) => state.config);
	const wallet = useSelector((state) => state.wallet);
	const dispatch = useDispatch();
	const [walletBalance, setWalletBalance] = useState(0);
	const [error, setError] = useState(null);
	const [modalIsOpen, setModalOpen] = React.useState(false);


	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	useEffect(() => {
		dispatch(setSelectedMenu('send'));
		return () => {
			dispatch(removeSelectedMenu());
		};
	}, []);

	useEffect(() => {
		socket.emit('get-balance', wallet.publicKey);
	}, []);

	useEffect(() => {
		socket.on('balance', (balance) => {
			setWalletBalance(balance);
			console.log(balance);
		});
	}, []);

	useEffect(() => {
		socket.on('transfer-success', () => {
			openModal();
		});

		socket.on('transfer-fail', (message) => {
			setError(message);
			console.log(message);
		});
	}, []);

	const onSubmit = (data) => {
		socket.emit('transfer', {
			privateKey: wallet.privateKey,
			fromAddress: wallet.publicKey,
			toAddress: data.address,
			amount: data.amount,
		});
	};

	return (
		<>
			<NavbarContainer />
			<Container>
				<MainContainer>
					<Sidebar config={config} />
					<Body>
						<Title>Send your coin to other wallet</Title>
						<FormContainer onSubmit={handleSubmit(onSubmit)}>
							<Title>Amount</Title>
							{errors.amount && (
								<Form.Error>
									Amount must be smaller than your balance
								</Form.Error>
							)}
							{error && <Form.Error>{error}</Form.Error>}
							<Input
								name="amount"
								type="number"
								ref={register({
									required: true,
									max: walletBalance,
								})}
							/>
							<Title>Adress</Title>
							<Input
								name="address"
								ref={register({ required: true })}
							/>
							<Button type="submit">Send</Button>
						</FormContainer>
						<Modal
							isOpen={modalIsOpen}
							onRequestClose={closeModal}
							contentLabel="Notification"
							style={customStyles}
						>
							<ModalContainer>
								<ModalTitle>Transfer successully</ModalTitle>
								<Button onClick={() => closeModal()}>Ok</Button>
							</ModalContainer>
						</Modal>
					</Body>
				</MainContainer>
			</Container>
		</>
	);
};

export default Send;
