import { styled } from "styled-components";

export const HomeBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* max-width: 80%; */
    gap: 1rem;
`

export const HeaderSection = styled.div`
    /* display: grid; */
    /* grid-template-columns: 2fr 1fr; */
    /* align-items: start;      */
    /* gap: 3rem; */
    margin: 0 auto;
    border-bottom: 1px solid #CECECE;
    padding-bottom: 1.5rem;

    #bigHome h2{
        font-size: 1.8rem;
    }
`

export const LittleBanner = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* grid-gap: 0 2rem; */
    border-bottom: 1px solid #CECECE;
    margin: .5rem 0;
    padding-bottom: 1rem;
`

export const ThirdPart = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 2fr; */
    gap: 2rem;
    border-bottom: 1px solid #CECECE;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    .newsList {
        border-right: solid 1px #CECECE;
        padding-right: 1rem;
    }
`

export const BannerList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const FakeNewsSection = styled.div`
    padding-bottom: 2rem;
    /* width: 90%; */
    align-self: center;


    #topFake {
        /* display: flex; */
        justify-content: space-between;
        align-items: center;
        background-color: #E2E2E2;
        padding: .5rem;
        margin-bottom: 1rem;

        h4 {
            font-size: 1.2rem;
            font-weight: normal;
        }

        p {
            color: #0876FF;
            font-weight: bold;
            cursor: pointer;
        }
    }
    
    #gridFake {
        /* display: flex; */
        height: 30rem;
        gap: 3rem;
    }

    #vertical {
        /* display: flex; */
        /* flex-direction: column; */
        align-items: center;
        gap: 1rem;
        justify-content: space-around;
        /* width: 25rem; */
        padding-left: 1rem;
        border-left: solid 1px #CECECE;
    }
`

export const FifthPart = styled.div`
    /* display: flex; */
    justify-content: space-evenly;
    border-top: dashed 2px #CECECE;
    padding-top: 2rem;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
`