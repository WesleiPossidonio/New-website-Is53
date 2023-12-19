import styled from "styled-components";

export const ContainerDashBoard = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors["base-bg"]};
`

export const ContentData = styled.section`
    width: 85%;
    height: 50rem;
    max-height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    border: none;
    border-radius: 8px;

    background-color: ${({theme}) => theme.colors["base-bd-card"]};
`

export const HeaderDashboard = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > img {
        width: 2rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    p {
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            color: ${({theme}) => theme.colors["base-blue"]};
        }
    }
`

export const ContentDashboard = styled.div`
  width: 90%;
  height: 38rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;
  padding: 2rem;

  border: none;
  border-radius: 8px;

  

  > h1 {
    align-self: flex-start;
    margin-bottom: 2rem;
  }
`

export const Form = styled.form`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1rem;

`