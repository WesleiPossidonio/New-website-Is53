import styled from "styled-components";

export const ContainerLogin = styled.main`
   width: 100%;
   height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;

   padding: 0 1.5rem;

   background-color: ${({theme}) => theme.colors["base-bg"]};
`

export const ContainerForm = styled.div`
  width: 35rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  padding: 1.5rem;

  background-color: ${({theme}) => theme.colors["base-bd-card"]};
`


export const Form = styled.form`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;

   margin-top: 4rem;
`

export const ContainerNavigateLInk = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.7rem;

`

export const TextLink = styled.a`
   align-self: flex-start;

   font-size: ${({theme}) => theme.fontSizes["text-regular-s"]};
   color: ${({theme}) => theme.colors["base-white"]};

   cursor: pointer;

   &:hover {
      color: ${({theme}) => theme.colors["base-blue"]};
   }
`
