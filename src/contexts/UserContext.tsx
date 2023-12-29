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

  interface CreateUserProps {
    name: string
    password: string
    admin: string
    email: string
  }

  interface DataUserProps {
    id: string
    name: string
    email: string
    admin: boolean
    token: string
  }
  
  interface UserCompanyType {
    HandleLogin: (data: DataLoginProps) => Promise<void>
    handleCreateUser: (data: CreateUserProps ) => Promise<void>
    updateUser: (data: DataLoginProps) => Promise<void>
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

    const handleCreateUser = useCallback( async (data: CreateUserProps) => {

      const {admin, email, name, password} = data

      try {
         await toast.promise(
          api.post('users', {admin, email, name, password }), 
          {
            pending: 'Verificando seus dados',
            success: 'Usuário Criado!',
            error: 'Verifique os dados e tente novamente 🤯',
          },
        )
      } catch (error) {
        console.log('rerror =>', error)
      }
    }, [])


    const updateUser = useCallback( async (data: DataLoginProps) => {
      const {email, password} = data
      try {
         await toast.promise(
          api.put('update-password', { email, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Senha Atualizada com Sucesso!',
            error: 'Verifique seu email 🤯',
          },
        )
    
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } catch (error) {
        setTimeout(() => {
          navigate('/atualizar-senha')
        }, 1000)
        console.log(error)
      }

    }, [])


    return (
      <DataUserContext.Provider
        value={{HandleLogin, dataUser, handleCreateUser, updateUser}}
      >
        {children}
      </DataUserContext.Provider>
    )
  }
  
export const useDataUser = () => {
    const context = useContext(DataUserContext)
    return context
}