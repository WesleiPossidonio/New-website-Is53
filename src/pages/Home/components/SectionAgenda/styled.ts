import styled from "styled-components";

export const ContainerAgenda = styled.section`
  width: 100%;
  height: 45rem;
  max-height: max-content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5rem 1rem;
  padding-bottom: 10rem;

  background-color: ${({theme}) => theme.colors["base-bg"]};

  > h1{
      margin-bottom: 0.7rem !important;
  }

  @media(max-width: 768px) {
    padding: 9rem 0.5rem;

  }


  @media(max-width: 600px) {
    h1 {
      margin-top: 8rem;
    }

  }

`

export const ContainerList = styled.ul`
  width: 80%;
  height: max-content;

  list-style: none;
  margin-top: 7.125rem;
`

export const ListAgenda = styled.li`
  width: 100%;
  height: 5.1875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  cursor: pointer;

  transition: 0.5s ease-in;


  > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  &:last-child {
      border-bottom: none;
    }

  &:hover{
    background-color: ${({theme}) => theme.colors["base-blue"]};
  }


  @media(max-width: 768px) {

    > div {
       width: 50%;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: center;
    
    }
  }

  @media(max-width: 600px) {
    height: 10rem;
    padding: 1rem;
    gap: 2rem;

    > p {
     text-align: center;
    }

  }  

`