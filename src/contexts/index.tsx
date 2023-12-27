import { ReactNode } from 'react'
import { DataUserProvider } from './UserContext'
import { DataAgendaProvider } from './AgendaContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <DataAgendaProvider>
      <DataUserProvider>{children}</DataUserProvider>
   </DataAgendaProvider>
  )
}