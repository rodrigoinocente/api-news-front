import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
	display: flex;
	flex-flow: column nowrap;
  justify-self: center;
	height: auto;
	gap: .5rem;
	padding: 1.2rem 0;

		#content {
			p {
				font-size: 1.2rem;
				word-wrap: break-word;
			}
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
	gap: 1.5rem;
	align-items: center;

		#counts {
			display: flex;
			gap: .6rem;
		}
			
		.countsIcon {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: flex-end;
			gap: 3px;

			img {
					width: 1.5rem;
			}
		}
`