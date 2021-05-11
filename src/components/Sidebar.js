import React from 'react';
import styled from 'styled-components';
import StickyBox from 'react-sticky-box';
import Tag from './Tag';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
    flex: ${(props) => props.flex};
`;

const Title = styled.h1`
	font-size: 2rem;
	text-transform: uppercase;
	font-weight: 500;
	color: #909ca8;
`;


const Sidebar = ({ flex, config: {selected, categories} }) => {
	return (
		<Wrapper flex={flex}>
			<StickyBox offset={20}>
				{categories.map(category => (
					<Tag title={category} selected={selected === category.toLowerCase()} link={`${category.toLowerCase()}`} />
				))}
			</StickyBox>
		</Wrapper>
	);
};

export default Sidebar;
