import { ReactNode } from 'react'
import { DataUserProvider } from './UserContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
   <DataUserProvider>{children}</DataUserProvider>
  )
}