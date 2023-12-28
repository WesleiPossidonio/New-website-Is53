import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'

import api from '../services/api'
import { toast } from 'react-toastify'


interface CreateAgendaProps {
    id?: string
    church_name: string  
    agenda_date: string
    address: string
}

interface DataAgendaType {
    handleCreateAgenda: (data: CreateAgendaProps) => Promise<void>
    deleteList: (data: string) => Promise<void>
    listAgenda: CreateAgendaProps[]
}

interface AgendaProps {
    children: ReactNode
}

export const DataAgendaContext = createContext({} as DataAgendaType)
  

export const DataAgendaProvider = ({children}: AgendaProps ) => {
const [listAgenda, setListAgenda] = useState<CreateAgendaProps[]>([])

const getListAgenda = useCallback(async () => {
    const listAgenda = await api.get('listCalendar')
    const { data } = listAgenda

    setListAgenda(data)
  
}, [])


useEffect(() => {
    getListAgenda()
    
}, [])


function formatDate(date: string) {
   const data = new Date(date);
   const nameMoth = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(data);

   const day = data.getDate();
   const year = data.getFullYear();

   const dataFormatada = day + ' de ' + nameMoth + ' ' + year;
   return dataFormatada;
}

const handleCreateAgenda = useCallback( async (data: CreateAgendaProps) => {
const {address, church_name, agenda_date} = data

const formattedDate = formatDate(agenda_date)

try {
    const respose = await toast.promise(
        api.post('addCalendar', {church_name, agenda_date: formattedDate, address }), 
        {
            pending: 'Verificando seus dados',
            success: 'Agenda criada!',
            error: 'Verifique seus dados e tente novamente 🤯',
        },
    )

    const { data } = respose
    setListAgenda([...listAgenda, data])
} catch (error) {
    console.log('error =>', error)
}
}, [])

const deleteList = useCallback(async (id: string) => {
    try {
         await toast.promise(
            api.delete(`agenda/${id}`), {
               pending: 'Verificando seus dados',
               success: 'Agenda Concluída',
               error: 'Ops! Verifique os Dados Digitados',
            }
        )
     const newList = listAgenda.filter(list => list.id !== id)
     
     setListAgenda(newList)

    } catch (error) {
        console.log(error)
    }
}, [])

  return (
    <DataAgendaContext.Provider value={{handleCreateAgenda, deleteList, listAgenda}}>
      {children}
    </DataAgendaContext.Provider>
  )
}


export const useDataAgenda = () => {
    const context = useContext(DataAgendaContext)
    return context
}