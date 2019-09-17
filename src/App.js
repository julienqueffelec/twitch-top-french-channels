import React, { Component } from 'react';
import GetInfos from './components/GetInfos';
import Head from './components/Head';
import styled from 'styled-components';

const Appli = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	max-width: 900px;
	margin: 10px auto;
	background-color: #131314;
`;

class App extends Component {
	render() {
		return (
			<Appli>
				<Wrapper>
					<Head></Head>
					<GetInfos></GetInfos>
				</Wrapper>
			</Appli>
		);
	}
}

export default App;
