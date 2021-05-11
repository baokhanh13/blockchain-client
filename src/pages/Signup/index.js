import React from 'react';
import styled from 'styled-components/macro';
import SignupForm from '../../containers/SignupForm';
import img from '../../images/crossword.png';
import { Link } from 'react-router-dom';

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

const Signup = () => {
	return (
		<Container>
            <Header to="/">eCoinWallet</Header>
            <SignupForm />
        </Container>
	);
};

export default Signup;
