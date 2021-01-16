import React from 'react';
import male from '../images/male_image.png';
import female from '../images/female_image.png';
import PreferNotToSay from '../images/prefer_not_to_say.png';

const CardRecords = ({ card }) => {
	return (
		<div key={card.URL} className='record'>
			<div className='record-container'>
				<div className='user-bio'>
					<div className='avatar'>
						<img
							src={
								card.Gender === 'Female'
									? female
									: card.Gender === 'Male'
									? male
									: PreferNotToSay
							}
							alt='User Avatar'
						/>
						<h2>{`${card.FirstName} ${card.LastName}`}</h2>
					</div>
					<div className='bio'>
						<div className='bio-item'>
							<span>Username: </span>
							<span>{card.UserName.toLowerCase()}</span>
						</div>
						<div className='bio-item'>
							<span>Email: </span>
							<span>{card.Email.toLowerCase()}</span>
						</div>
						<div className='bio-item'>
							<span>Gender: </span>
							<span>{card.Gender}</span>
						</div>
						<div className='bio-item'>
							<span>Location: </span>
							<span>
								<a
									href={`https://www.google.com/maps/@${card.Latitude},${card.Longitude}`}
								>
									My Location
								</a>
							</span>
						</div>
						<div className='bio-item'>
							<span>Website: </span>
							{card.DomainName.toLowerCase()}
							<a href={`${card.URL}`}>My Website</a>
						</div>
						<div className='bio-item'>
							<span>Payment Method: </span>
							<span>{card.PaymentMethod}</span>
						</div>
						<div className='bio-item'>
							<span>Creditcard Number: </span>
							<span>{card.CreditCardNumber}</span>
						</div>
						<div className='bio-item'>
							<span>Creditcard Type: </span>
							<span>{card.CreditCardType}</span>
						</div>
						<div className='bio-item'>
							<span>Mac Address: </span>
							<span>{card.MacAddress}</span>
						</div>
						<div className='bio-item'>
							<span>Last seen: </span>
							<span>{card.LastLogin}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardRecords;
