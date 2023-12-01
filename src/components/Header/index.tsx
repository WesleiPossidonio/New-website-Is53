import { ContainerHeader, ContentList, MenuLink } from "./styled"
import { useState, useEffect } from 'react'

import Logo from '../../assets/Logo-is53.svg'


export const Header = () => {

  const [stateBackgroundHeader, setStateBackgroundHeader] =
  useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
  
      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <ContainerHeader stateHeader={stateBackgroundHeader}>

      <img src={Logo} alt="" />

      <ContentList>
        <MenuLink to="Home" smooth={true}>Home</MenuLink>
        <MenuLink to="about" smooth={true}>Sobre Nós</MenuLink>
        <MenuLink to="news" smooth={true}>Lançamentos</MenuLink>
        <MenuLink to="store" smooth={true}>Loja</MenuLink>
      </ContentList>
    </ContainerHeader>
  )
}


