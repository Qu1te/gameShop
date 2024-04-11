import React from "react";
import Header from "../components/header";
import "../styles/Main.css"
import searchIcon from "../img/searchIcon.png"
import HeaderSale from "../img/Group.png"
import Like from "../img/Like.png"
import gamepad from "../img/gamepad.png"
import DownBtn from "../img/DownBtn.png"
import Star from "../img/Star.png"
import Footer from "../components/Footer";


const Main = () => {
	return(
		<div>
			<Header/>
			<div className="topHeader">
				<div className="topHeaderContent">
					<div className="topHeaderLeft">
						<div className="Title">
							<h1>Welcom to Play Hub</h1>
							<p>the best gaming website for selling games.</p>
						</div>
						<form action="" className="headerTopSearch">
							<input type="search" placeholder="Search" />
							<button><img src={searchIcon} alt="" draggable="false"/></button>
						</form>
					</div>
					<div className="topHeaderRight">
						<img src={HeaderSale} alt="" draggable="false" />
					</div>
				</div>
			</div>
			<section className="sectionInfo">
				<div className="sectionInfoConteiner">
					<div className="sectionInfoBox">
						<img src={Like} alt="" draggable="false" />
						<p>beast game</p>
					</div>
					<div className="sectionInfoBox">
						<img src={gamepad} alt="" draggable="false"  />
						<p>beast game</p>
					</div>
					<div className="sectionInfoBox">
						<img src={DownBtn} alt="" draggable="false"  />
						<p>beast game</p>
					</div>
					<div className="sectionInfoBox">
						<img src={Star} alt="" draggable="false" />
						<p>beast game</p>
					</div>
				</div>
			</section>
			<section className="TopCategories">
				<div className="TopCategoriesConteiner">
					<h1>Top Categories</h1>
					<div>

					</div>
				</div>
			</section>
			<section className="TopGames">
				<div className="TopGameConteiner">
					<h1>Top Game</h1>
					<div>
						
					</div>
					<button className="TopGamesBtn">More</button>
				</div>
			</section>
			<Footer/>
		</div>
	)
}

export default Main;