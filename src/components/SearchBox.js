import React from 'react';

const SearchBox = ({ onChange }) => {
	return (
		<div className='ml-3 mr-3'>
			<input
				type='text'
				placeholder='&#xF002;  Search by gender, payment method'
				onChange={onChange}
				autoFocus
			/>
		</div>
	);
};

export default SearchBox;
