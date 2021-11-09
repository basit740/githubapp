import axios from 'axios';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import getCookie from './utils/getCookie';
const GetToken = (props) => {
	const [token, setToken] = useState('');
	const tokenHandler = (event) => {
		setToken(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		props.submitToken();
		document.cookie = 'githubPAS=' + token;
		setToken('');
	};

	return (
		<>
			<h3>Please put your Github token here</h3>
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
					label='github access token'
					variant='outlined'
					onChange={tokenHandler}
				/>

				<Button type='submit' variant='contained' size='large'>
					Submit
				</Button>
			</Box>
		</>
	);
};
export default GetToken;
