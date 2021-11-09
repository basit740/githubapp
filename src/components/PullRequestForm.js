import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getCookie from './utils/getCookie';
import PullRequests from './PullRequests';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PullRequestForm = (props) => {
	const [token, setToken] = useState(false);

	const [username, setUsername] = useState('');
	const [repo, setRepo] = useState('');

	const [error, setError] = useState(false);

	// Actuall Data

	const [pullRequests, setPullRequests] = useState([]);

	const tokenHandler = (event) => {
		setToken(event.target.value);
	};

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	};
	const repoHandler = (event) => {
		setRepo(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		console.log('submitHandler working on');
		console.log(token);
		const headers = {
			Authorization: 'token ' + token,
		};

		axios
			.get(`https://api.github.com/repos/${username}/${repo}/pulls?state=all`, {
				headers: headers,
			})
			.then((res) => {
				console.log(res.data);
				setPullRequests(res.data);
			})
			.catch((err) => {
				setError(true);
			});
	};

	return (
		<>
			{error && <span style={{ color: 'red' }}>Error</span>}
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				onSubmit={submitHandler}
			>
				<TextField
					id='outlined-basic'
					label='github token'
					variant='outlined'
					onChange={tokenHandler}
				/>
				<TextField
					id='outlined-basic'
					label='github username'
					variant='outlined'
					onChange={usernameHandler}
				/>

				<TextField
					id='outlined-basic'
					label='repository'
					variant='outlined'
					onChange={repoHandler}
				/>

				<Button type='submit' variant='contained' size='large'>
					Submit
				</Button>
			</Box>

			<PullRequests pullRequests={pullRequests} />
		</>
	);
};

export default PullRequestForm;
