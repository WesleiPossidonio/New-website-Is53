import styled from "styled-components";
import { SwiperSlide } from 'swiper/react';

export const ContainerStore = styled.section`
  width: 100%;
  height: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  background-color: ${({theme}) => theme.colors["base-bg"]};

   
 > h1{
      margin-bottom: 1.5rem !important;
  }

  .mySwiper {
    width: 90%;
    height: 30rem;
    margin: 4.125rem;
   }

   @media(max-width: 600px){
      > h1 {
        font-size: 4.875rem;
      }
   }
`

export const CardSwiper = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: ${({theme}) => theme.colors["base-bd-card"]};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  > img {
   width: 21rem;
   object-fit: cover;
   
  }

  &:hover {
    a {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    } 
  }

`

export const Footer = styled.a`
  width: 97%;
  height: 5.5rem;
  background-color: rgba(0,0,0,0.75);
  padding: 1rem;

  position: absolute;
  bottom: 0.5rem;

  border-radius: 6px;

  text-decoration: none;


  cursor: pointer;

  display: none;

`


export const Button = styled.a`
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

  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors["base-blue"]};
  }

  &:active {
    opacity: 0.5;
  }
`