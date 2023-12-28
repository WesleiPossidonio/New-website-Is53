
import { TextRegular } from '../../../../components/typograph'
import Logo from '../../../../assets/Logo-is53.svg'

import { ContainerHeaderDashboard, ContentLink } from './styled'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

interface HeaderDashboardProps {
    handleSectedHeader: (data: string) => void
}

export const HeaderDashboard = ({handleSectedHeader}: HeaderDashboardProps) => {
 const [isOpen, setIsOpan] = useState(false)
 
 const handleStateMenuMobile = () => {
    setIsOpan((open: boolean) => !open)

    console.log(isOpen)
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
        </ContentLink>
  </ContainerHeaderDashboard>
  )
}


