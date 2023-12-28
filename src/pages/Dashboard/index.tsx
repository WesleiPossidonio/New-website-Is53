
import { useState } from "react"
import { AddSchedule } from "./components/AddSchedule"
import { AddUser } from "./components/AddUsers"

import { ContainerDashBoard, ContentData } from "./styled"
import { ListGig } from './components/ListGig'
import { HeaderDashboard } from "./components/HeaderDashboard"

export const Dashboard = () => {
const [selectedHeader, setSelectedHeader] = useState('Criar Agenda')

const handleSectedHeader = (data: string) => {
  setSelectedHeader(data)
}

  return (
    <ContainerDashBoard>
      <ContentData>
        
      <HeaderDashboard handleSectedHeader={handleSectedHeader}/>
       {
          selectedHeader === 'Criar Agenda' && <AddSchedule /> ||
          selectedHeader === 'Criar Usuario' && <AddUser /> ||
          selectedHeader === 'Lista' && <ListGig />
       }

      </ContentData>
    </ContainerDashBoard>
  )
}

