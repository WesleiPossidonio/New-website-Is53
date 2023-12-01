import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 4rem 2rem;
  background-color: ${({theme}) => theme.colors["base-bg"]};


  @media(max-width: 500px){
    flex-direction: column;

    img {
        margin-top: 4rem;
    }
  }

`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   > img {
      width: 3rem;
      margin-bottom: 0.5rem;
    }

   > p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      cursor: pointer;
    }

   .link {
      text-decoration: none;
      color: #fff;
    }
`

export const ContentNav = styled(Content)`
  gap: 0.3rem;
  
  > h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    > p { 
      &:hover {
        color: ${({theme}) => theme.colors["base-blue"]};
      }
    }
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`