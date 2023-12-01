import styled from "styled-components";
import { Link } from 'react-scroll'
interface ContainerHeaderProps {
    stateHeader: boolean
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;

  background: ${({ theme, stateHeader }) =>
    stateHeader ? theme.colors["base-bg"] : 'transparent'};
  z-index: 9999;

 > img  {
    width: 2rem;
 }

`

export const ContentList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

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