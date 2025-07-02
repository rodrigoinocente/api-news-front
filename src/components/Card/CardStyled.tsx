import { styled } from "styled-components";

export const CardBody = styled.article`
    box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 8px 0px;
    border-radius: .5rem;
    cursor: pointer;
    padding: .5rem;
`

export const CardInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    #underTitle {
        display: flex;
        gap: 1rem;
        justify-content: space-between;

        img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 5%;
        }

        #subtitleAndTimes {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            gap: 1rem;

            p {
            hyphens: auto;
            }
        }
    }
    
    h2 {
        font-size: 1.5rem;
    }
`