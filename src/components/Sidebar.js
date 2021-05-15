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


const Sidebar = ({ flex, config: {selected, categories} }) => {
	return (
		<Wrapper flex={flex}>
			<StickyBox offset={20}>
				{categories.map(category => (
					<Tag key={category} title={category} selected={selected === category.toLowerCase()} link={`${category.toLowerCase()}`} />
				))}
			</StickyBox>
		</Wrapper>
	);
};

export default Sidebar;
