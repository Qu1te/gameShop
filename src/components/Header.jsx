import React,{useState} from 'react'

const Header = () => {
	const [openMenu,setOpenMenu] = useState(false)

	const ToggleMenu = () => {
		setOpenMenu(!openMenu)
	}
  return (
	<header className="headerContent">
	<div className='headerMainConteiner'>
		<div className='logo'>
			<h1>Play Hub</h1>
		</div>
		<nav className='nav'>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about-us">About us</a></li>
				<li><a href="/Addcard">Add Cad</a></li>
				<li>basket</li>
				<li id='SignIn'><a href="/login">Sign In</a></li>
			</ul>
		</nav>
		
		<div className={`menuBtn ${openMenu ? 'open' : ''}`} onClick={ToggleMenu}>
			<span className='menuIcon'></span>
			<span className='menuIcon'></span>
			<span className='menuIcon'></span>
		</div>
		{openMenu && (
		<div className='menuConteiner'>
			<div className="menu-items">
				<a href="/">Home</a>
				<a href="/">About us</a>
				<a href="/">Add Cad</a>
				<a href="/">basket</a>
				<a href="/">Sign In</a>
			</div>
	  	</div>
	)}
	</div>
	
 </header>
  )
}

export default Header
