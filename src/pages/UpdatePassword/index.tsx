import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import {  TitleText } from "../../components/typograph"
import { ContainerForm, ContainerLogin, Form, TextLink,} from "./styled"
import { useDataUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'


const loginCompaniesFormSchema = zod.object({
  email: zod
    .string().email('Por gentileza, Digite o E-mail corretamente'),
  password: zod
    .string()
    .min(6, 'Favor digite sua senha corretamente')
    .max(6, 'Favor digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<typeof loginCompaniesFormSchema>

export const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(loginCompaniesFormSchema),
  })
  const navigate = useNavigate()

  const { updateUser } = useDataUser()

  const handleLogin = (data: createLoginCompaniesFormInputs) => {
    updateUser(data)
    reset()
  }

  const handleNavigateToUpdatePassword = () => {
    navigate('/login')
  }


  return (
    <ContainerLogin>
      <ContainerForm>
        <TitleText size="m">Atualizar Senha</TitleText>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input placeholder="Digite seu E-mail" 
            {...register('email')} type="text"
            error={errors.email?.message} />

          <Input placeholder="Digite Sua Nova Senha" 
            {...register('password')} type="password"
            error={errors.password?.message} />

          <Button>Atualizar</Button>
        </Form>

        <TextLink onClick={handleNavigateToUpdatePassword}>
          Voltar ao Login
        </TextLink>
      </ContainerForm>
    </ContainerLogin>
  )
}


