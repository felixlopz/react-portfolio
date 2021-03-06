import React, { useState } from 'react';
import styled from 'styled-components';
import  logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";

const StyledNavbar = styled.div`
	position: fixed;
	z-index: 3;
	width: 100%;
	background : var(--color-dark);
	padding: 0.8em 3em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--color-white);
`

const LogoContainer = styled.div`
	width: 45px;
	img{
		margin-top: 10px;
		width: 100%;
		object-fit: cover;
		object-position: center center;	
	}
`
const MenuButton = styled.div`
	position: relative;
	width: 25px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	cursor: pointer;
`
const MenuButtonBurger = styled.div`
	&,&::after, &::before{
		width: 100%;
		height: 1px;
		background: var(--color-white);
		transition: all .3s ease;
	}

	&::after, &::before{
		position: absolute;
		content:'';
	}
	
	&{background: ${props => props.isNavOpen ? 'transparent' : ''};}

	&::before{
		transform: translateY(-8px);
		transform: ${props => props.isNavOpen ? 'rotate(45deg)' : ''};
	}
	&::after{
		transform: translateY(8px);
		transform: ${props => props.isNavOpen ? 'rotate(-45deg)' : ''};
	}

	@media ${props => props.theme.mediaQueries.small}{
	  display: none;
	}

`

const Navigation = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--color-darker);
	z-index: 4;
	transition: all 0.4s ease;
	opacity: ${props => props.isNavOpen ? 1 : 0};
	transform: ${props => props.isNavOpen ? 'translateY(0)' : 'translateY(-100%)'};

	display: flex;
	align-items: center;

	@media ${props => props.theme.mediaQueries.small}{
	  position: static;
		background: transparent;
	  flex-basis: 30%;
	  height: 100%; 
	  transform: translateY(0);
	  opacity: 1;
	  justify-content: space-between;
	}
`

const NavList = styled.ul`
	width: 100%;
 	display: flex;
 	flex-flow: column nowrap;
	align-items: center;	
	list-style: none;
	opacity: ${props => props.isNavOpen ? 1 : 0};
	transition:  ${props => props.isNavOpen ? 'opacity 0.3s 0.35s ease' : ''}; 

	@media ${props => props.theme.mediaQueries.small}{
	  opacity: 1;
	  flex-direction: row;
	  justify-content: flex-end;
	}
`
const NavLink = styled.li`
	&:not(:last-child){
		margin-bottom: 2rem;
		
		@media ${props => props.theme.mediaQueries.small}{
			margin-bottom: 0;
			margin-right: 3rem;
		}
	}

	a{
		font-size: 2.4rem;
		padding: 0.1em 0.3em;
		text-decoration: none;
		color: var(--color-white);

		@media ${props => props.theme.mediaQueries.small}{
			font-size: 1.8rem;
			font-weight: var(--regular);
			cursor: pointer;
		}
	}

	@media ${props => props.theme.mediaQueries.small}{
		&:first-child{
			display: none;
		}
	}

`
const ContactList = styled.ul`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 8%;
	transform: ${props => props.isNavOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: ${props => props.isNavOpen ? 'transform 0.3s 0.35s ease' : ''};
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;

	@media ${props => props.theme.mediaQueries.small}{
	  display: none;
	}
`

const ListItem = styled.li`
	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;

	a{
		color: var(--color-white);
		font-size: 2.4rem;
		text-decoration: none;
	}

	&:not(:last-child){
		margin-right: 1rem;
	}
`

const Navbar = (props) => {
	const [isNavOpen, setIsNavOpen] = useState(false); 

	const toggleNav = () =>{
		if (window.innerWidth >= 600 ) return;

		!isNavOpen ? 
			document.body.style.overflow = 'hidden' 
			:
		 document.body.style.overflow = 'visible';
		setIsNavOpen(!isNavOpen) 
	}

  return (
  	<StyledNavbar>
  		<LogoContainer>
  			<img src={logo} alt="felix lopez logo"/>
  		</LogoContainer>

		  <MenuButton onClick={()=> toggleNav()}
		  >
		  	<MenuButtonBurger isNavOpen={isNavOpen}/>
		  </MenuButton>

		  <Navigation isNavOpen={isNavOpen}>
		  	<NavList isNavOpen={isNavOpen}>
		  		<NavLink>
		  			<Link 
		  				onClick={()=> {toggleNav(); scroll.scrollToTop()}}
		  				to="#"
  				   	spy={true}
  				   	smooth={true}
  				   	duration= {1000}
		  			> 
		  				Home 
		  		  </Link>
		  		</NavLink>
		  		<NavLink>
		  			<Link 
		  				onClick={()=> toggleNav()}
		  				to="portfolio"
  				   	spy={true}
  				   	offset={-62}
  				   	smooth={true}
  				   	duration= {1000}
		  			> 
		  				Portfolio 
		  		  </Link>
		  		</NavLink>
		  		<NavLink>
		  			<Link 
		  				onClick={()=> toggleNav()}
		  				to="about"
  				   	spy={true}
  				   	offset={-62}
  				   	smooth={true}
  				   	duration= {1000}
		  			> 
		  				About 
		  		  </Link>
		  		</NavLink>
		  		<NavLink>
		  			<Link 
		  				onClick={()=> toggleNav()}
		  				to="contact"
  				   	spy={true}
  				   	offset={-62}
  				   	smooth={true}
  				   	duration= {1000}
		  			> 
		  				Contact 
		  		  </Link>
		  		</NavLink>
		  	</NavList>
		  	<ContactList isNavOpen={isNavOpen}>
		  		<ListItem>
		  			<a href="#">
		  				<FontAwesomeIcon icon ="envelope"/>
		  			</a>
		  		</ListItem>
		  		<ListItem>
		  			<a href="#">
		  				<FontAwesomeIcon icon ={['fab', 'github']}/>
		  			</a>
		  		</ListItem>
		  		<ListItem>
		  			<a href="#">
		  				<FontAwesomeIcon icon ={['fab', 'linkedin']}/>
		  			</a>
		  		</ListItem>
		  		<ListItem>
		  			<a href="#">
		  				<FontAwesomeIcon icon ={['fab', 'instagram']}/>
		  			</a>
		  		</ListItem>
		  	</ContactList>
		  </Navigation>
			
  	</StyledNavbar>
  )
}

export default Navbar;