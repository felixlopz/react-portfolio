import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a.attrs({ target: '_blank' })`

	overflow: hidden;
	text-align: center;
	position: relative;
	font-size: 1.4rem;
	font-weight: var(--medium);
	padding: 0.5em 1em;	
	text-transform: uppercase;
	/*border: 1px solid white;*/
	background: var(--color-darker);
	z-index: 2;
	text-decoration: none;
	color: var(--color-white);
	outline: none;

	&::before, &::after, span::before, span::after{
		content:'';
		position: absolute;
		background: var(--color-white);
		transition: transform 0.3s linear;
	}

	/* Left */
	&::before{
		left: 0px; top: 0px; bottom: 0px; width: 1px;
		transform: translateY(-100%);
	}

	/* Bottom */
	&::after{
		bottom: 0px; left: 0px; right: 0px; height: 1px;
		transform: translateX(-100%);
	}

	span{
	 	/* Right */
		&::before{
			top: 0px; bottom: 0px; right: 0px; width: 1px;
			transform: translateY(100%);
		}

		/* Top */
		&::after{
			top: 0px; left: 0px;  right:0px; height: 1px;
			transform: translateX(100%);
		}
	}

	&:active , &:hover, &:focus{
		 &::before , &::after, span::before, span::after{
				transform: translate(0, 0);
		 }

	}

`

const ButtonLink = (props) => {
  return (
    <StyledButton {...props}>
    	<span>
    		{props.children}	
    	</span>
    </StyledButton>
  )
}

export default ButtonLink;