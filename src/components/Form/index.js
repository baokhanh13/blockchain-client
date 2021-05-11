import React from 'react';
import { Button, Input, Container, Title, Bottom, StyledLink, Error } from './Form.style';

const Form = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Form.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Form.Input = ({ children, register, required,pattern, ...restProps }) => {
	return (
		<Input ref={register({ required, pattern })} {...restProps}>
			{children}
		</Input>
	);
};

Form.Button = ({ children,...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Form.Bottom = ({ children, ...restProps }) => {
    return <Bottom {...restProps}>Or {children}</Bottom>
}

Form.Link = ({ children, ...restProps }) => {
    return <StyledLink {...restProps}>{children}</StyledLink>
}

Form.Error = ({ children, ...restProps }) => {
    return <Error {...restProps}>{children}</Error>
}

export default Form;
