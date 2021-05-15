import React from 'react';
import styled from 'styled-components/macro';
import SignupForm from '../../containers/SignupForm';
import img from '../../images/crossword.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import history from '../../utils/history';

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
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${img});
	flex-direction: column;
`;

const Header = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 30px;
`;

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const Title = styled.h2`
	font-size: 1.6rem;
	line-height: 1.4;
	color: blue;
`;

const Subtitle = styled.p`
	font-size: 1.4rem;
	font-weight: semibold;
	margin-bottom: 1rem;
`;

const ModalText = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
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

const Signup = () => {
	const [modalIsOpen, setModalOpen] = React.useState(false);
	const wallet = useSelector((state) => state.wallet);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
		history.push('/login');
	}

	React.useEffect(() => {
		if (!!wallet.privateKey) {
			openModal();
		}
	}, [wallet.privateKey]);


	return (
		<Container>
			<Header to="/">eCoinWallet</Header>
			<SignupForm />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Your private key"
				style={customStyles}
			>
				<ModalContainer>
					<Title>Your private key</Title>
					<Subtitle>
						Please store your private key in a secret place. We will
						need your private key to login
					</Subtitle>
					<ModalText>{wallet.privateKey}</ModalText>
					<Button onClick={() => closeModal()}>Ok</Button>
				</ModalContainer>
			</Modal>
		</Container>
	);
};

export default Signup;
