import { useEffect, useState, useCallback } from 'react'

import { ContainerAgenda, ContainerList, ListAgenda } from './styled'
import { TextRegular, TitleText } from '../../../../components/typograph'
import api from '../../../../services/api'


interface listAgendaProps {
    id: 'string',
    church_name: 'string',
    agenda_date: 'string',
    address: 'string'
}

export const SectionAgenda = () => {
    const [listAgenda, setListAgenda] = useState<listAgendaProps[]>([])


    const sendListAgenda = useCallback(async () => {
        const listAgens = await api.get('listCalendar')
        const { data } = listAgens
    
        setListAgenda(data)
      }, [])

    useEffect(() => {
        sendListAgenda()
    }, [])


  return (
    <ContainerAgenda>
      <TitleText size='l' family='dosis' weight={300}>Agenda</TitleText>

      <ContainerList>
       {
          listAgenda.map( list => {
            return (
                <ListAgenda key={list.id}>
                    <TextRegular>{list.church_name}</TextRegular>
                    <TextRegular>{list.agenda_date}</TextRegular>
                    <TextRegular>{list.address}</TextRegular>
                </ListAgenda>
            )
          })
       }
      </ContainerList>
    </ContainerAgenda>
  )
}


