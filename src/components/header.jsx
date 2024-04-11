import React, {useEffect,useState} from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const [openMenu, setMenuOpen] = useState(false)

const ToggleMenu = () => {
	setMenuOpen(!openMenu)
}
	return(
		<header className={`headerConteiner ${scrolled ? 'scrolled' : ''}`}>
			<div className="headerContend">
				<div className="Logo"> 
					<h1>Play Hub</h1>
				</div>
				<div className="nav">
					<ul>
						<li id="HomeBtn">Home</li>
						<li>About us</li>
						<li>Contact Us</li>
						<li>basket</li>
						<li id="SignInBtn">Sign In</li>
					</ul>
				</div>
				<div className="burger-menu"> 
						<div className={`burger-icon ${openMenu ? 'open' : ''}`} onClick={ToggleMenu}>
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
					</div>
					{openMenu &&(
						<div className="menu-items">
							<a href="/">Home</a>
          				<a href="/">About us</a>
          				<a href="/">Contact Us</a>
			 				<a href="/">basket</a>
							<a href="/">Sign In</a>
						</div>
					)}
			</div>
		</header>
	)
}

export default Header;