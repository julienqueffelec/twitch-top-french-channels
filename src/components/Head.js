import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	font-size: 15px;
	padding: 10px;
`;
const PositionTitle = styled.span`
	width: 60px;
`;

const ViewerTitle = styled.span`
	width: 200px;
	display: flex;
`;

const GameTitle = styled.span`
	width: 200px;
`;
const StreamerCount = styled.span`
	width: 200px;
	display: flex;
`;

class Head extends Component {
	render() {
		return (
			<Header>
				<PositionTitle></PositionTitle>
				<StreamerCount>Streamer</StreamerCount>
				<ViewerTitle>Viewers</ViewerTitle>
				<GameTitle>Jeu</GameTitle>
			</Header>
		);
	}
}

export default Head;
