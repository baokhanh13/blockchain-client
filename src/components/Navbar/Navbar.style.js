import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 80%;  
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    margin-top: 2rem;
    height: 4rem;
`;

export const Logo = styled(Link)`
    font-weight: bold;
    flex: 4;
    text-decoration: none;
    font-size: 1.8rem;
`;

export const Links = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0 1rem;
    flex: 1;
`;

export const Item = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
`;

export const Button = styled.button`
	padding: 0.5rem 0.5rem;
	font-size: 1.4rem;
	border-radius: 1rem;

	&:hover {
		opacity: 0.8;
	}
`;