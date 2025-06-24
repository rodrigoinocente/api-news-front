import { styled } from "styled-components";

export const HomeBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    border-bottom: 1px solid #CECECE;
    padding-bottom: 2rem;
    margin-bottom: 1.5rem;

    #bigHome h2{
        font-size: 1.8rem;
    }
`

export const LittleBanner = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    overflow-x: auto;
    scrollbar-width:none;
    padding: 0 1rem 1.5rem 1rem;

    .little-banner {
        flex-shrink: 0;
        width: 20rem;
        
        h2 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            padding: .5rem .5rem .1rem .5rem;
            margin-bottom: .5rem;
        }
    }
`

export const ThirdPart = styled.div`
    align-self: center;
    gap: 1rem;
    width: 90%;
    margin-top: 2rem;

    .newsList {
        margin-bottom: 3rem;
    }
`

export const BannerList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    margin-bottom: 3rem;
    width: 100%;
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