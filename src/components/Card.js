import React, { useState } from 'react';

import CardRecords from './CardRecords';
import Pagination from '../Pagination';
import SearchBox from '../SearchBox';

const Card = ({ data }) => {
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
		<div className='app-container'>
			<div className='records-control'>
				<SearchBox
					className='search'
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<Pagination
					totalRecords={data.length || currentRecords.length}
					recordsPerPage={recordsPerPage}
					paginate={paginate}
				/>
			</div>
			<div className='data-records'>
				{currentRecords
					.filter((card) =>
						// {
						// 	if (searchTerm === '') {
						// 		return card;
						// 	} else if (
						// 		card.FirstName.toLowerCase().match(searchTerm.toLowerCase()) ||
						// 		card.Gender.toLowerCase().match(searchTerm.toLowerCase()) ||
						// 		card.PaymentMethod.toLowerCase().match(
						// 			searchTerm.toLowerCase()
						// 		) ||
						// 		card.LastName.toLowerCase().match(searchTerm.toLowerCase()) ||
						// 		card.CreditCardType.toLowerCase().match(searchTerm.toLowerCase()) ||
						// 		card.CreditCardNumber.toLowerCase().match(searchTerm.toLowerCase())
						// 	)
						// 		return card;
						// })
						(searchTerm === '') ?
							card : 
								card.FirstName.toLowerCase().match(searchTerm.toLowerCase()) ||
								card.Gender.toLowerCase().match(searchTerm.toLowerCase()) ||
								card.PaymentMethod.toLowerCase().match(
									searchTerm.toLowerCase()
								) ||
								card.LastName.toLowerCase().match(searchTerm.toLowerCase()) ||
								card.CreditCardType.toLowerCase().match(
									searchTerm.toLowerCase()
								) ||
								card.CreditCardNumber.toLowerCase().match(
									searchTerm.toLowerCase()
								)
							? card : null
						
					)
					.map((card) => {
						return <CardRecords key={card.URL} card={card} />;
					})}
			</div>
		</div>
	);
};

export default Card;
