import styled from "styled-components";

export const ContainerHero = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

 > h1 {
    margin-bottom: 0.875rem;
 }
`

export const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`


export const ContainerText = styled.div `
  z-index: 10;
  position: absolute;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonHero = styled.button`
  width: 15.25rem;
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.9375rem 2.7299375rem 0.9375rem 2.75rem;
  margin-top: 2.0625rem;

  border-radius: 200px;
  border: 2px solid ${({theme}) => theme.colors["base-blue"]};

  color: #FFF;

  text-align: center;
  font-family: ${({theme}) => theme.fontFamily["base-source"]};
  font-size: ${({theme}) => theme.fontSizes["text-regular-s"]};
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; 
  letter-spacing: 2px;
  text-transform: uppercase;

  background-color: transparent;
  transition: 0.6s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors["base-blue"]};
  }

  &:active {
    opacity: 0.5;
  }
`