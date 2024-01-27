import { ContainerHeader, ContentList, ContentListMobile, Headerdesktop, LinkAdmin, MenuLink } from "./styled"
import { useState, useEffect } from 'react'

import Logo from '../../assets/Logo-is53.svg'
import { List, X } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"


export const Header = () => {

  const [stateBackgroundHeader, setStateBackgroundHeader] =
  useState<boolean>(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  

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

  const handleTogleMenu = () => {
    setIsOpen((open: boolean) => !open)
  }

  const handleNavigateToDashboard = () => {
    navigate('/dashboard')
  }


  return (
    <ContainerHeader stateHeader={stateBackgroundHeader}>
      <Headerdesktop>
        <img src={Logo} alt="" />

        {
          isOpen ? <X size={35} weight="fill" onClick={handleTogleMenu} /> 
          : <List size={35} weight="fill" onClick={handleTogleMenu} />
        }
  
        <ContentList>
          <MenuLink to="Home" smooth={true}>Home</MenuLink>
          <MenuLink to="about" smooth={true}>Sobre Nós</MenuLink>
          <MenuLink to="schedule" smooth={true}>Agenda</MenuLink>
          <MenuLink to="news" smooth={true}>Lançamentos</MenuLink>
          <MenuLink to="store" smooth={true}>Loja</MenuLink>
          <LinkAdmin onClick={handleNavigateToDashboard}>Admin</LinkAdmin>
        </ContentList>
      </Headerdesktop>


      <ContentListMobile isOpen={isOpen}>
        <MenuLink to="Home" smooth={true} onClick={handleTogleMenu}>Home</MenuLink>
        <MenuLink to="about" smooth={true} onClick={handleTogleMenu}>Sobre Nós</MenuLink>
        <MenuLink to="schedule" smooth={true} onClick={handleTogleMenu}>Agenda</MenuLink>
        <MenuLink to="news" smooth={true} onClick={handleTogleMenu}>Lançamentos</MenuLink>
        <MenuLink to="store" smooth={true} onClick={handleTogleMenu}>Loja</MenuLink>
        <LinkAdmin onClick={handleNavigateToDashboard}>Admin</LinkAdmin>
      </ContentListMobile>
    </ContainerHeader>
  )
}


