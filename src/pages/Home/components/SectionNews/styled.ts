import styled from "styled-components";

import ImageBg from '../../../../assets/BgImage2.webp'

export const ContainerNews = styled.section`
  width: 100%;
  height: 49.61125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageBg});
  background-repeat: no-repeat;
  background-size: cover;

`

export const ButtonPlay = styled.button`
  width: 5.625rem;
  height: 5.625rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 2rem;
  
  border-radius: 200px;
  border: 6px solid #FFF;
  
  background-color: transparent;
  
  cursor: pointer;
  
  
  &:hover{
      width: 5.725rem;
      height: 5.725rem;

      opacity: 0.6;
    }
`
