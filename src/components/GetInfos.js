import React, { useState, useEffect } from 'react';
import LiveStreamCard from './LiveStreamCard';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

const client_id = process.env.REACT_APP_TWITCH_KEY;
const acceptLink = 'application/vnd.twitchtv.v5+json';

const GetInfos = () => {
	const [streams, setStreams] = useState([]);
	useEffect(() => {
		let didCancel = false;

		async function fetchData() {
			const TwitchAPI = axios.create({
				baseURL: 'https://api.twitch.tv/kraken/',
				headers: {
					'Client-ID': client_id,
					Accept: acceptLink
				}
			});
			if (!didCancel) {
				const response = await TwitchAPI.get(
					`streams/?limit=20&broadcaster_language=fr`
				);
				setStreams(response.data.streams);
			}
		}

		fetchData();

		return () => {
			didCancel = true;
		};
	}, []);

	const renderStreams = streams.length
		? streams.map((stream, index) => {
				return (
					<BrowserRouter key={stream.channel._id}>
						<LiveStreamCard
							index={index}
							viewers={stream.viewers}
							url={stream.channel.url}
							routeParam={stream.channel._id}
							name={stream.channel.display_name}
							gameName={stream.channel.game}
						/>
					</BrowserRouter>
				);
		  })
		: '';

	return (
		<div>
			<div>{renderStreams}</div>
		</div>
	);
};

export default GetInfos;
