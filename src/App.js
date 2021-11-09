import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import getCookie from './components/utils/getCookie';

import './App.css';

import PullRequests from './components/PullRequests';
import GetToken from './components/GetToken';
import PullRequestForm from './components/PullRequestForm';

function App() {
	return (
		<div className='App'>
			<PullRequestForm />
		</div>
	);
}

export default App;
