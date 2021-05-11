import React from 'react';
import styled from 'styled-components';
import NavbarContainer from '../../containers/Navbar';
import img from '../../images/big-spaceman.1b378c1b.png';

const Wrapper = styled.div`
	height: 100vh;
`;

const Container = styled.div`
	min-height: calc(100vh - 4rem);
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const WelcomeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`;

const Header = styled.h2`
	font-size: 2rem;
	font-weight: bold;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

const Description = styled.p`
	font-size: 1.5rem;
	font-weight: semibold;
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Welcome = () => {
	return (
		<Wrapper>
			<NavbarContainer />
			<Container>
				<Header>Welcome to eCoinWallet</Header>
				<WelcomeContainer>
					<DescriptionContainer>~
						<Title>eCoin's Original Wallet</Title>
						<Description>
							eCoinWallet is a free,
							client-side interface helping you interact with the
							eCoin blockchain. Our easy-to-use, open-source
							platform allows you to generate wallets, interact
							with smart contracts, and so much more.
						</Description>
					</DescriptionContainer>

					<img src={img} />
				</WelcomeContainer>
			</Container>
		</Wrapper>
	);
};

export default Welcome;
