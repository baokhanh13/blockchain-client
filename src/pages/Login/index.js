import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import LoginForm from '../../containers/LoginForm';
import img from '../../images/crossword.png';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${img});
`;

const Header = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
`;

const Login = () => {
	return (
		<Container>
            <Header to="/">eCoinWallet</Header>
            <LoginForm />
        </Container>
	);
};

export default Login;
