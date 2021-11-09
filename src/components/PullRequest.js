import React from 'react';
import './PullRequest.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

const PullRequest = (props) => {
	return (
		<Card sx={{ minWidth: 275 }} className='pull-request'>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Pull Request
				</Typography>
				<Typography variant='h5' component='div'>
					{props.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					{props.state == 'open' ? (
						<Chip label={props.state} color='success' />
					) : (
						<Chip label={props.state} color='warning' />
					)}
				</Typography>
				<Typography variant='body2'>
					{props.body}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};
export default PullRequest;
