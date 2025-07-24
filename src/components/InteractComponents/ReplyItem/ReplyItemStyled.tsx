import styled from "styled-components";

export const Container = styled.div`
	width: 95%;
	display: flex;
	flex-flow: column nowrap;
	padding: .6rem 0 .6rem 1.7rem;
	gap: .4rem;

	#content p {
		font-size: 1.1rem;
		word-wrap: break-word;
	}
`

export const Header = styled.section`
	display: flex;
	flex-flow: row nowrap;
	align-content: space-between;		
	justify-content: space-between;

  #right {
  	display: flex;
  	flex-flow: row nowrap;
  	align-items: center;
  	gap: .3rem;
  }

	#nameAndTime{
    display: flex;
    flex-flow: column nowrap;
		gap: .2rem;
  }

	#trash img {
		width: 1.3rem;
	}
`
export const Footer = styled.section`
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-end;
	gap: 3px;

	img {
			width: 1.3rem;
	}
`