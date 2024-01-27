
import { TextRegular } from '../../../../components/typograph'
import Logo from '../../../../assets/Logo-is53.svg'

import { ContainerHeaderDashboard, ContentLink } from './styled'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

interface HeaderDashboardProps {
    handleSectedHeader: (data: string) => void
}

export const HeaderDashboard = ({handleSectedHeader}: HeaderDashboardProps) => {
  const [isOpen, setIsOpan] = useState(false)

  const navigate = useNavigate()
 
  const handleStateMenuMobile = () => {
    setIsOpan((open: boolean) => !open)
  }

  const handleExitUser = () => {
    localStorage.removeItem('is53:userData1.0')
    navigate('/')
  }


  return (
    <ContainerHeaderDashboard>
      <img src={Logo} alt="" />

      {
        isOpen ? <X size={35} weight="fill" onClick={handleStateMenuMobile} /> 
        : <List size={35} weight="fill" onClick={handleStateMenuMobile} />
      }

      <ContentLink isOpen={isOpen}>
        <TextRegular weight={700}  
          onClick={() => handleSectedHeader('Criar Agenda')}
        >  
          Criar Agenda
        </TextRegular>
  
        <TextRegular weight={700} 
          onClick={() => handleSectedHeader('Criar Usuario')}
        >
          Criar Usuário
        </TextRegular>
  
        <TextRegular weight={700} 
          onClick={() => handleSectedHeader('Lista')}
        >
          Listas de Agendas
        </TextRegular>
        <TextRegular weight={700} 
          onClick={() => handleExitUser()}
        >
          Sair
        </TextRegular>
      </ContentLink>
    </ContainerHeaderDashboard>
  )
}


