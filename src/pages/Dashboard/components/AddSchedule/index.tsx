import { useForm } from "react-hook-form"
import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import { TitleText } from "../../../../components/typograph"
import { ContentDashboard, Form } from "../../styled"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useDataAgenda } from "../../../../contexts/AgendaContext"

const createScheduleFormSchema = zod.object({
  church_name: zod.string().min(3, 'Por Favor digite um nome da igreja ou evento'),
  agenda_date: zod.string(),
  address: zod.string().min(3, 'Por Favor digite o endereço da igreja ou evento'),
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

  const {handleCreateAgenda} = useDataAgenda()

  const handleCreatedSchedule = (data: CreateScheduleFormInputs) => {
     handleCreateAgenda(data)
     reset()
  }

  return (
    <ContentDashboard>
    <TitleText size="m">Adicionar Gig</TitleText>
    
    <Form onSubmit={handleSubmit(handleCreatedSchedule)}>
      <Input
        placeholder="Digite o nome da Igreja ou Evento" 
        colorDashboard 
        {...register('church_name')} type="text"
        error={errors.church_name?.message} 
      />
      <Input 
        placeholder="Digite o nome da Cidade da Igreja ou Evento" 
        colorDashboard 
        {...register('address')} type="text"
        error={errors.address?.message} 
      />
      <Input 
        type="date" 
        colorDashboard
        {...register('agenda_date')} 
        error={errors.agenda_date?.message} 
      />

      <Button dashboard>Enviar</Button>
    </Form>
    
  </ContentDashboard>
  )
}


