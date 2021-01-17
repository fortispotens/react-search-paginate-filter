import React from 'react';

const SearchBox = ({ onChange }) => {
	return (
		<div className='ml-3 mr-3'>
			<input type='text' placeholder='Search' onChange={onChange} />
		</div>
	);
};

export default SearchBox;
