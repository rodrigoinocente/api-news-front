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

export const TextareaSection = styled.section`
    text-align: center;
    width: 100%;
    position: relative;

    textarea {
        width: 90%;
        border-radius: 10px;
        padding: 10px 40px 10px 10px;
        height: 35px;
        overflow-y: hidden;
        resize: none;
    }

    img {
        width: 30px;
    }

    button {
        all: unset;
        position: absolute;
        right: 24px;
				/* top: 2px;c */
        align-self: flex-end;
				margin-bottom: 3px;
    }
`