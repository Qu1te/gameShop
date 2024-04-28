import React from 'react'
import "../styles/AddCard.css"
const AddCard = () => {
  return (
	 <div className='AddcardConteiner'>
		<div className='AddcardContent'>
			<div className='AddTheCardTitle'>
				<h1>Add the card details</h1>
			</div>
			<div className='AddcardInput'>
				<div className='AddcardInputLeft'>
					<form action="">
						<input type="text" placeholder='Your name' />
						<input type="text" placeholder=' Card number' />
						<input type="text" name="" id="" placeholder='Data' 
						dateFormat="MM/yyyy"
						/>
					</form>
					
				</div>
				<div className='AddcardInputRight'>
					<form action="">
						<input type="text" placeholder='Your surname' />
						<input type="text" placeholder='vvs' maxLength={3} />
						<input type="text" placeholder='place of issue' />
					</form>
					
				</div>
			</div>
			<div className='AddcardBtn'>
					<div>
						<a href="/" id='BackBtn'>Back</a>
					</div>
					<div className='AddBtn'>
						<a href="/" id='AddBtn'>Add card</a>
					</div>
			</div>
		</div>
	 </div>
  )
}

export default AddCard;
