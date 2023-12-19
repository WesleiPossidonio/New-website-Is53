import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState,
} from 'react'

import api from '../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

  interface DataLoginProps {
    email: string
    password: string
  }

  interface DataUserProps {
    id: string
    name: string
    email: string
    admin: boolean
    token: string
  }
  
  interface UserCompanyType {
    HandleLogin: (data: DataLoginProps) => void
    dataUser: DataUserProps
  }
  
  interface UserCompanyProps {
    children: ReactNode
  }
  
  export const DataUserContext = createContext({} as UserCompanyType)
  
  export const DataUserProvider = ({ children }: UserCompanyProps) => {
    const [dataUser, setDataUser] = useState<DataUserProps>({} as DataUserProps)
    const navigate = useNavigate()

    const HandleLogin = useCallback(
      async (data: DataLoginProps) => {
        const { email, password } = data
  
        try {
          const response = await toast.promise(
            api.post('sessions', { email, password }),
            {
              pending: 'Verificando seus dados',
              success: 'Seja Bem-vindo(a)!',
              error: 'Verifique seu email e senha 🤯',
            },
          )
  
          const { data } = response
  
          await localStorage.setItem(
            'is53:userData1.0',
            JSON.stringify(data),
          )
  
          setDataUser(data)
  
          setTimeout(() => {
            navigate('/dashboard')
          }, 1000)
        } catch (error) {
          console.log(error)
        }
      },
      [navigate],
    )


    return (
      <DataUserContext.Provider
        value={{HandleLogin, dataUser}}
      >
        {children}
      </DataUserContext.Provider>
    )
  }
  
export const useDataUser = () => {
    const context = useContext(DataUserContext)
    return context
}