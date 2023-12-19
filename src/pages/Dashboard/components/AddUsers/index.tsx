import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import { TextRegular, TitleText } from "../../../../components/typograph"
import { ContentDashboard, Form } from "../../styled"
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CreateUserType, CreateUserTypeButton } from "./styled"
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react"

const createUserFormSchema = zod.object({
  admin: zod.string(),
  name: zod.string().min(3, 'Por Favor digite um nome'),
  email: zod.string().email('Por Favor digite um email válido'),
  password: zod.string().min(6, 'A senha tem que ser no mínimo 6 digitos').max(6, 'A senha tem que ser no maximo 6 digitos' ),
  registration: zod.string(),
})

type CreateUserFormInputs = zod.infer<typeof createUserFormSchema>

export const AddUser = () => {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      admin: 'sim',
    },
  })


  const handleCreatedUser = (data: CreateUserFormInputs) => {
    console.log(data)
  }

  return (
    <ContentDashboard>
    <TitleText size="m">Adicionar Usuário</TitleText>
    
    <Form onSubmit={handleSubmit(handleCreatedUser)}>
    <Input 
        placeholder="Nome"
        colorDashboard
        type="text"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input 
        placeholder="Digite o E-mail" 
        colorDashboard 
        type="text"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input 
        placeholder="Digite a Senha" 
        type="text"
        colorDashboard 
        {...register('password')}
        error={errors.password?.message}
      />

      <Controller
        control={control}
        name="admin"
        render={({ field }) => {
          const stringValue = field.value.toString()
          return (
            <CreateUserType
              onValueChange={field.onChange}
              value={stringValue}
            >
              <TextRegular size="s">
                O Usuário será Administrador?
              </TextRegular>
              <div>
                  <CreateUserTypeButton variant="true" value="true">
                    <ArrowCircleUp size={26} />
                    Sim
                  </CreateUserTypeButton>

                <CreateUserTypeButton variant="false" value="false">
                  <ArrowCircleDown size={26} />
                  Não
                </CreateUserTypeButton>
              </div>
            </CreateUserType>
          )
        }}
      />

      <Button  dashboard>Enviar</Button>
    </Form>

  </ContentDashboard>
  )
}
