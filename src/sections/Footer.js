import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';

const Wrapper = styled.section`
	background: var(--color-darker);
	color: var(--color-white);
  padding: 6em 3.2em;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const TalkText = styled.p`
	color: var(--color-white);
	font-size: 2.8rem;
	font-weight: var(--medium);
	text-transform: capitalize;
`
const HightLighter = styled.span`
	color: var(--color-light);
	font-weight: var(--bold);
`

const ContactBox = styled.div`
	margin: 7.5rem 0;
`

const Email = styled.a`
	font-size: 2.4rem;
	font-weight: var(--medium);
	color: var(--color-light); 
`

const ContactList = styled.ul`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;

`

const ListItem = styled.li`
	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;
	a{
		color: var(--color-white);
		font-size: 4rem;
		text-decoration: none;
	}

	&:not(:last-child){
		margin-right: 2rem;
	}
`

const LogoBox = styled.div`
	width: 100px;

	img{
		width: 100%;
	}
`

const Footer = (props) => {
  return (
  	<Wrapper>
  		<TalkText>
  			let's build <HightLighter> something  awesome </HightLighter> together
  		</TalkText>
  		<ContactBox>
  			<Email>
  				hello@felixlopez.xyz
  			</Email>
  			<ContactList>
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
  		</ContactBox>
  		<LogoBox>
  			<img src={logo} alt="felix lopez logo"/>
  		</LogoBox>
  	</Wrapper>
  )
}

export default Footer;