import React from 'react'
import HeaderMain from '../components/HeaderMain'
import SellImg from "../img/sellImg.png"
import searchIcon from "../img/searchIcon.png"
import like from "../img/Group 21.png"
import game from "../img/Group 22.png"
import install from "../img/Group 23.png"
import star from "../img/Group 24.png"
import Footer from '../components/Footer'

const Main = () => {
  return (
	 <div className='MainPages'>
		<HeaderMain/>
		<main>
			<div className='top'>
				<div className='topConteiner'>
					<div className='WelcomText'>
						<h1>Welcom to Play Hub</h1>
						<p>the best gaming website for selling games.</p>
						<div className='search'> 
							<input type="text"  placeholder='Search'/>
							<button><img src={searchIcon} alt="" /></button>
						</div>
					</div>
					<div className='sellImg'>
						<img src={SellImg} draggable="false" alt="" />
					</div>
				</div>
			</div>
		</main>
		<section className='advantages'>
			<div className='advantagesContent'>
				<div className="box" id='boxOne'>
					<img src={like} draggable="false" alt=""/>
					<p>beast game</p>
				</div>
				<div className="box"  id='boxTwo'>
					<img src={game} draggable="false"  alt=""/>
					<p>beast game</p>
				</div>
				<div className="box"  id='boxTrhee'>
					<img src={install} draggable="false" alt=""/>
					<p>beast game</p>
				</div>
				<div className="box"  id='boxFour'>
					<img src={star}  draggable="false" alt=""/>
					<p>beast game</p>
				</div>
			</div>
		</section>
		<section className='TopCategories'>
			<div className='CategoriesConteiner'>
				<h1>Categories</h1>
			</div>
		</section>
		<section className='topGame'>
			<div className='gameConteiner'>
				<h1>Top Game</h1>
				
			</div>
			<button className='MoreBtn'>More</button>
		</section>
		<Footer/>
	 </div>
  )
}

export default Main
