import styled, { css } from "styled-components";

export const ContainerHeaderDashboard = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

    > img {
        width: 2rem;
    }

    p {
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            color: ${({theme}) => theme.colors["base-blue"]};
        }
    }

    svg {
        color: ${({theme}) => theme.colors["base-white"]};;
    }

    @media(max-width: 720px){
       justify-content: space-between;
       padding: 1.5rem;
    }
` 

interface ContentLinkProps {
    isOpen: boolean
}

export const ContentLink = styled.div<ContentLinkProps>`
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    ${({isOpen}) => isOpen && css`
       width: 90%;
       flex-direction: column;
       margin: 0 auto;

       position: absolute;
       top: 5.5rem;
       right: 0;
       left: 0;

       gap: 0.8rem;

       padding: 0.8rem 0;
       border-radius: 4px;

       background-color: ${({theme}) => theme.colors["base-bg"]};
    `}

`