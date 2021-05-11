import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrap = styled(Link)`
	text-decoration: none;
	outline: none;
	display: block;
    margin: 0.6rem 0;
`;

const TagWrapper = styled.div`
	font-size: 1.6rem;
	padding: 0.6rem 1rem;
	font-weight: 500;
	border-radius: 0.5rem;
	color: ${(props) =>
		props.selected ? '#000' : ''};
`;

const Tag = ({ title, selected, link}) => {
	return (
		<LinkWrap to={`/${link}`} >
			<TagWrapper selected={selected}>{title}</TagWrapper>
		</LinkWrap>
	);
};

export default Tag;
