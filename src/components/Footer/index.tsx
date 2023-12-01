
import { TextRegular, TitleText } from '../typograph'
import { InstagramLogo, YoutubeLogo, TiktokLogo } from '@phosphor-icons/react'
import { ContainerFooter, ContainerIcons, Content, ContentNav } from './styled'
import { Link } from 'react-scroll'

import Logo from '../../assets/Logo-is53.svg'

export const Footer = () => {
  return (
    <ContainerFooter>
        <Content>
            <img src={Logo} alt="" />
            <TextRegular weight={700}>Todos os Direitos Reservados</TextRegular>
            <TextRegular> &copy; 2023 Desenvolvido por <a href="www.weslifranca.com.br" target='_blank' className='link'>Weslei França</a></TextRegular>
        </Content>

        <ContentNav>
            <TitleText weight={600} family='roboto'>Navegação</TitleText>
            <Link to="Home" smooth={true}><TextRegular>Home</TextRegular></Link>
            <Link to="about" smooth={true}><TextRegular>Sobre Nós</TextRegular></Link>
            <Link to="news" smooth={true}><TextRegular>Lançamentos</TextRegular></Link>
            <Link to="story" smooth={true}><TextRegular>Loja</TextRegular></Link>
        </ContentNav>

        <ContentNav>
            <TitleText weight={600} family='roboto'>Nossas Redes</TitleText>
            <ContainerIcons>
                <a href="https://www.instagram.com/is53.music/" target='_blank'><InstagramLogo size={32} weight="fill" color='#fff' /></a>
                <a href="https://www.youtube.com/@is53music" target='_blank'><YoutubeLogo size={32} weight="fill" color='#fff'/></a>
                <a href="https://www.tiktok.com/@is53.banda" target='_blank'><TiktokLogo size={32} weight="fill" color='#fff'/></a>
            </ContainerIcons>
        </ContentNav>
    </ContainerFooter>
  )
}

