import React from 'react';

const SearchBox = ({ onChange }) => {
	return (
		<div>
			<div>
				<input type='text' placeholder='Search' onChange={onChange} />
			</div>
		</div>
	);
};

export default SearchBox;
