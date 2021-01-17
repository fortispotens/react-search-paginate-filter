import React, { useState } from 'react';

import Card from './Card';
import Pagination from './Pagination';
import SearchBox from './SearchBox';

const Cards = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(20);

	// Get current records
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className='app-container bg-light'>
			<div className='controls-container fixed-top text-light'>
				<div className='records-control  p-2 '>
					<span className='app-title text-center text-light'>User Records</span>
					<SearchBox
						className='search'
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<Pagination
						totalRecords={data.length}
						recordsPerPage={recordsPerPage}
						paginate={paginate}
					/>
				</div>
			</div>
			<div className='data-records'>
				{currentRecords
					.filter((card) =>
						searchTerm === ''
							? card
							: card.FirstName.toLowerCase().includes(
									searchTerm.toLowerCase()
							  ) ||
							  card.Gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  card.PaymentMethod.toLowerCase().includes(
									searchTerm.toLowerCase()
							  ) ||
							  card.LastName.toLowerCase().includes(
									searchTerm.toLowerCase()
							  ) ||
							  card.CreditCardType.toLowerCase().includes(
									searchTerm.toLowerCase()
							  ) ||
							  card.CreditCardNumber.toLowerCase().includes(
									searchTerm.toLowerCase()
							  )
							? card
							: null
					)
					.map((card) => {
						return <Card key={card.URL} card={card} />;
					})}
			</div>
		</div>
	);
};

export default Cards;
