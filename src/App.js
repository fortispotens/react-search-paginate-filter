import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import Cards from './components/Cards';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios(
				'https://api.enye.tech/v1/challenge/records'
			);
			setData(response.data.records.profiles);
		};
		getData();
	}, []);

	return (
		<div className='mt-5'>
			<h1 className='text-center text-primary mb-3'>User Records</h1>
			<Cards data={data} />
		</div>
	);
}

export default App;
