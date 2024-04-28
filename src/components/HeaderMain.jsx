import React ,{useState,useEffect }from 'react'
import "../styles/Main.css"
const HeaderMain = () => {

const [openMenu,setOpenMenu] = useState(false)

const ToggleMenu = () => {
	setOpenMenu(!openMenu)
}

const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
	 <header className={`headerMainContent ${isScrolled ? 'scrolled' : ''}`} >
		<div className='headerMainConteiner'>
			<div className='logo'>
				<h1>Play Hub</h1>
			</div>
			<nav className='nav'>
				<ul>
					<li id='HomeBtn'>Home</li>
					<li>About us</li>
					<li>Add Cad</li>
					<li>basket</li>
					<li id='SignIn'>Sign In</li>
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

export default HeaderMain
