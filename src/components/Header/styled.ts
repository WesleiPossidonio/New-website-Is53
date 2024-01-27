import styled from "styled-components";
import { Link } from 'react-scroll'
interface ContainerHeaderProps {
    stateHeader: boolean
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;

  background: ${({ theme, stateHeader }) =>
    stateHeader ? theme.colors["base-bg"] : 'transparent'};
  z-index: 9999;

  @media(max-width: 768px){
    padding: 0 2rem;
  }

`

export const Headerdesktop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

> img  {
    width: 2rem;
    z-index: 9999;
 }

 > svg {
    display: none;
    z-index: 9999;
 }

 @media(max-width: 768px){
    justify-content: space-between;

    > svg {
      display: block;
      color: #fff;
    }
  }

`

export const ContentList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 768px){
    display: none;
  }

`

interface ContentListMobileProps {
  isOpen: boolean
}

export const ContentListMobile = styled.nav<ContentListMobileProps>`
  width: 100%;
  height: 100vh;

  position: absolute;
  bottom: 0;
  top: 0;

  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  background-color: ${({theme}) => theme.colors["base-bg"]};


  @media(min-width: 768px){
    display: none;
  }
`

export const MenuLink = styled(Link)`
  color: ${({theme}) => theme.colors["base-white"]};
  font-size: ${({theme}) => theme.fontSizes["text-regular-s"]};
  font-size: ${({theme}) => theme.fontFamily["base-source"]};
  font-style: normal;
  font-weight: 400;
  line-height: 14px; 
  letter-spacing: 2px;
  text-transform: uppercase;

  cursor: pointer;

  &:after {
    content: '';
    width: 0px;
    height: 0.125rem;
    margin-top: 0.3125rem;

    display: block;
    background: ${({ theme }) => theme.colors["base-blue"]};
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }

`

export const LinkAdmin = styled.p`
  color: ${({theme}) => theme.colors["base-white"]};
  font-size: ${({theme}) => theme.fontSizes["text-regular-s"]};
  font-size: ${({theme}) => theme.fontFamily["base-source"]};
  font-style: normal;
  font-weight: 400;
  line-height: 14px; 
  letter-spacing: 2px;
  text-transform: uppercase;

  cursor: pointer;

  &:after {
    content: '';
    width: 0px;
    height: 0.125rem;
    margin-top: 0.3125rem;

    display: block;
    background: ${({ theme }) => theme.colors["base-blue"]};
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }


`