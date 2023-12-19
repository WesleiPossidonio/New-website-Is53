
import Logo from '../../assets/Logo-is53.svg'
import { TextRegular } from "../../components/typograph"
import { useState } from "react"
import { AddSchedule } from "./components/AddSchedule"
import { AddUser } from "./components/AddUsers"

import { ContainerDashBoard, ContentData, HeaderDashboard } from "./styled"
import { ListGig } from './components/ListGig'

export const Dashboard = () => {
const [selectedHeader, setSelectedHeader] = useState('Criar Agenda')

const handleSectedHeader = (data: string) => {
  setSelectedHeader(data)
}

  return (
    <ContainerDashBoard>
      <ContentData>
        <HeaderDashboard>
          <img src={Logo} alt="" />
          <div>
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
          </div>
        </HeaderDashboard>

       {
          selectedHeader === 'Criar Agenda' && <AddSchedule /> ||
          selectedHeader === 'Criar Usuario' && <AddUser /> ||
          selectedHeader === 'Lista' && <ListGig />
       }

      </ContentData>
    </ContainerDashBoard>
  )
}

