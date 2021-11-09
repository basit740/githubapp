import React from 'react';
import PullRequest from './PullRequest';
import './PullRequests.css';
const PullRequests = (props) => {
	const PRs = props.pullRequests;

	return (
		<>
			<div className='pull-request'>
				<h2>All Pull Requests (PRs)</h2>
				{PRs.map((pr) => {
					return (
						<>
							<PullRequest title={pr.title} body={pr.body} state={pr.state} />
							<br />
						</>
					);
				})}
			</div>
		</>
	);
};

export default PullRequests;
