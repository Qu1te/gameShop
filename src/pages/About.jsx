import React from 'react'
import Header from '../components/Header'
import "../styles/about.css"

const About = () => {
  return (
	 <div>
		<Header/>
		<div className='AboutContent'>
			<div className='AboutConteiner'>
				<div className='aboutTitle'><h1>About us</h1></div>
				<div className='AboutConteinerBox'>
					<div><h1>Our mission</h1></div>
					<p id='ptext'>We strive to provide our customers with not just games, but unique and exciting journeys into virtual worlds. We are sure that games are not just entertainment, they are an opportunity to immerse yourself in other realities, experience new emotions and experience incredible adventures.</p>
				</div>
				<div className='AboutConteinerWhiteBox'>
					<div><h1>What we offer</h1></div>
					<p id='ptext'>A wide range of games: from the most popular to unique and rare. <br />
						Constant updating of the product range: we keep track of industry innovations and offer fresh games immediately after their release. <br />
						Guaranteed quality: We only work with trusted publishers and distributors to ensure that our customers receive only the best products. <br />
						Convenient purchase and delivery: we have created an intuitive website interface that allows you to quickly and easily select and order a game. Delivery is carried out as soon as possible.</p>
				</div>
				<div className='AboutConteinerBox'>
					<div><h1>Our values</h1></div>
					<p id='ptext'>Customer Focus: We always put our customers' needs first and strive to provide them with the best possible service. 
						Innovation: we are constantly looking for new ways to improve our CE
						Striving for excellence: we never rest on our laurels and always strive for new ones</p>
				</div>
			</div>
		</div>
	 </div>
  )
}

export default About
