import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import {  TitleText } from "../../components/typograph"
import { ContainerForm, ContainerLogin, Form, TextLink,} from "./styled"
import { useDataUser } from '../../contexts/UserContext'


const loginCompaniesFormSchema = zod.object({
  email: zod
    .string().email('Por gentileza, Digite o E-mail corretamente'),
  password: zod
    .string()
    .min(6, 'Favor digite sua senha corretamente')
    .max(6, 'Favor digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<typeof loginCompaniesFormSchema>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(loginCompaniesFormSchema),
  })

  const { HandleLogin } = useDataUser()

  const handleLogin = (data: createLoginCompaniesFormInputs) => {
    HandleLogin(data)
    reset()
  }

  return (
    <ContainerLogin>
      <ContainerForm>
        <TitleText size="m">Login</TitleText>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input placeholder="Digite seu E-mail" 
            {...register('email')} type="text"
            error={errors.email?.message} />

          <Input placeholder="Digite Sua Senha" 
            {...register('password')} type="text"
            error={errors.password?.message} />

          <Button>Acessar</Button>
        </Form>

        <TextLink>
          Esqueci Senha?
        </TextLink>
      </ContainerForm>
    </ContainerLogin>
  )
}


