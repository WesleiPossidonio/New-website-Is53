import { useForm } from "react-hook-form"
import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import { TitleText } from "../../../../components/typograph"
import { ContentDashboard, Form } from "../../styled"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


const createScheduleFormSchema = zod.object({
  churchName: zod.string().min(3, 'Por Favor digite um nome da igreja ou evento'),
  AgendaDate: zod.string(),
  Address: zod.string().min(3, 'Por Favor digite o endereço da igreja ou evento'),
})

type CreateScheduleFormInputs = zod.infer<typeof createScheduleFormSchema>

export const AddSchedule = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateScheduleFormInputs>({
    resolver: zodResolver(createScheduleFormSchema),
  })

  const handleCreatedSchedule = (data: CreateScheduleFormInputs) => {
     console.log(data)
     reset()
  }

  return (
    <ContentDashboard>
    <TitleText size="m">Adicionar Gig</TitleText>
    
    <Form onSubmit={handleSubmit(handleCreatedSchedule)}>
      <Input
        placeholder="Digite o nome da Igreja ou Evento" 
        colorDashboard 
        {...register('churchName')} type="text"
        error={errors.churchName?.message} 
      />
      <Input 
        placeholder="Digite o nome da Cidade da Igreja ou Evento" 
        colorDashboard 
        {...register('Address')} type="text"
        error={errors.Address?.message} 
      />
      <Input 
        type="date" 
        colorDashboard
        {...register('AgendaDate')} 
        error={errors.AgendaDate?.message} 
      />

      <Button dashboard>Enviar</Button>
    </Form>
    
  </ContentDashboard>
  )
}


