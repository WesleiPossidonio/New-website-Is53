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
        const listAgenda = await api.get('listCalendar')
        const { data } = listAgenda

        setListAgenda(data)
      }, [])


      const loadListAgenda = async () => {
        const LocalListAgenda = await localStorage.getItem('cartorio:userData1.0')
        const listAgend = LocalListAgenda && JSON.parse(LocalListAgenda)

        if(listAgenda !== listAgend) {
          sendListAgenda()
        } else {
          setListAgenda(listAgend)
        }
      }


    useEffect(() => {
      loadListAgenda()
    }, [])


  return (
    <ContainerAgenda id='schedule'>
      <TitleText size='m' family='dosis' weight={300}>Gig Is53</TitleText>
      <TextRegular size="s" color="gray">Fique por dentro da nossa agenda!</TextRegular>

      <ContainerList>
       {
          listAgenda.map( list => {
            return (
              <ListAgenda key={list.id}>
                  <div>
                     <TextRegular>{list.church_name}</TextRegular>
                     <TextRegular>{list.address}</TextRegular>
                  </div>
                  <TextRegular>{list.agenda_date}</TextRegular>
              </ListAgenda>
            )
          })
        }
      </ContainerList>
    </ContainerAgenda>
  )
}


