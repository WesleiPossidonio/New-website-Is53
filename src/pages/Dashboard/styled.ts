import styled from "styled-components";

export const ContainerDashBoard = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
  
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
  @media(max-width: 720px){
    padding: 1rem;
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

  @media(max-width: 720px){
    padding: 0;
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