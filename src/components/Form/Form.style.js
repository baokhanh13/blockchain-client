import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';


export const Container = styled.form`
    width: 400px;
    padding: 2em;
    background: white;
    border-radius: .125rem;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 2rem;
    text-align: center;
`;

export const Input = styled.input`
    text-align: left;
    display: block;
    width: 100%;
    padding: 4px 0;
    margin-bottom: 1.625rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background-color: transparent;
    background-image: none;
    border: 0;
    border-bottom: 1px solid #d8d2cf;
    outline: 0;
    transition: border-color .2s;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
    font-size: 1.6rem;
    color: white;
    text-align: center;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 2px;
    border:0;
    border-bottom: ${({ bgColor }) => `2px solid ${bgColor}`};

    &:disabled{
        cursor: not-allowed;
        opacity: 0.65;
    }
`;

export const Error = styled.p`
    font-size: 1.4rem;
    color: red;
    margin-bottom: 1.625em;
`;

export const Bottom = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    margin: 20px 0;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;