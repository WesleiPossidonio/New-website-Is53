import { ContainerDashBoard, ContentDashboard, ContentData, Form, HeaderDashboard } from "./styled"

import Logo from '../../assets/Logo-is53.svg'
import { TextRegular, TitleText } from "../../components/typograph"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export const Dashboard = () => {
  return (
    <ContainerDashBoard>
      <ContentData>
        <HeaderDashboard>
          <img src={Logo} alt="" />
          <div>
            <TextRegular weight={700}>Criar Usuário</TextRegular>
            <TextRegular weight={700}>Listas de Agendas</TextRegular>
          </div>
        </HeaderDashboard>

        <ContentDashboard>
          <TitleText size="m">Adicionar Gig</TitleText>
          
          <Form>
            <Input placeholder="Digite o nome da Igreja ou Evento" colorDashboard />
            <Input placeholder="Digite o nome da Cidade da Igreja ou Evento" colorDashboard />
            <Input type="date" colorDashboard/>
          </Form>

          <Button dashboard>Enviar</Button>
        </ContentDashboard>

      </ContentData>
    </ContainerDashBoard>
  )
}

