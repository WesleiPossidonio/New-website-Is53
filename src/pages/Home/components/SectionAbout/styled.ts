import styled from "styled-components";

export const ContainerAbout = styled.section`
width: 100%;
height: 38.08625rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: ${({theme}) => theme.colors["base-bg"]};
`


export const ContainerText = styled.div`
max-width: 40rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.375rem;


> h1 {
    text-align: center;
}

> p {
    text-align: center;
}


@media(max-width: 560px){
    max-width: 80%;

    > h1 {
       font-size: 1.7rem;
       line-height: 2.2rem;
    }

    > p {
        font-size: ${({theme}) => theme.fontSizes["text-regular-s"]};
    }
}

`