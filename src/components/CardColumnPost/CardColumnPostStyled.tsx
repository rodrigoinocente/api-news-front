import { styled } from "styled-components";

export const CardBody = styled.article`
    box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 8px 0px;
    border-radius: .5rem;
    cursor: pointer;
    padding: 1rem .5rem .5rem .5rem;
`

export const CardInfo = styled.div`
    display: flex;
    gap: .5rem;

    h2 {
        font-size: 1.5rem;
        height: fit-content;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    span {
        position: absolute;
        letter-spacing: .4rem;
        text-align: center;
        background-color: #6d84eb;
        color: #fff;
        font-weight: bold;
        border-radius: 15px;
        padding: 4px 7px;
        margin-top: -25px;
        font-size: .7rem;
        font-weight: bold;

    }

    #info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        gap: 1rem;

        #footer {
            display: flex;
            flex-flow: column nowrap;
            gap: .5rem;
        }

        #journalist {
            display: flex;
            gap: .5rem;
            align-items: center;

            h4 {
                font-weight: normal;
            }

            img {
                width: 2rem;
                border-radius: 50%;
            }
        }
    }

    #banner {
        align-self: center;
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 5%;
    }
`