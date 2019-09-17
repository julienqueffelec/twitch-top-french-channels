import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	padding: 10px;
`;

const Index = styled.span`
	width: 60px;
`;

const Viewers = styled.span`
	width: 200px;
	display: flex;
`;

const GameName = styled.span`
	width: 200px;
`;
const Streamer = styled.span`
	width: 200px;
	display: flex;
`;

const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const LiveStreamCard = ({ viewers, routeParam, name, gameName, index }) => (
	<Card>
		<Index>{index + 1}</Index>
		<Link to={'/channel/' + routeParam}>
			<Streamer>{name}</Streamer>
		</Link>
		<Viewers>{numberWithCommas(viewers)}</Viewers>
		<Link
			to={{
				pathname: `/game/${gameName}`
			}}
		>
			<GameName>{gameName}</GameName>
		</Link>
	</Card>
);

export default LiveStreamCard;
