import styled from "styled-components";

export const ContainerAgenda = styled.section`
  width: 100%;
  height: max-content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 9rem 1rem;

  background-color: ${({theme}) => theme.colors["base-bg"]};

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

  &:last-child {
      border-bottom: none;
    }

  &:hover{
    background-color: ${({theme}) => theme.colors["base-blue"]};
  }

`