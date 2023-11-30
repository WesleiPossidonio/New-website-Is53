import { TextRegular, TitleText } from "../../../../components/typograph"
import { ContainerAbout, ContainerText } from "./styled"

export const SectionAbout = () => {
  return (
    <ContainerAbout>
      <TitleText size="s" color="blue" weight={900} family="roboto" lineHeight="s">Sobre Nós</TitleText>
     
     
     <ContainerText>
     <TitleText size="m" color="white" weight={300} family="dosis" lineHeight="m">Temos como objetivo expandir o Reino de Deus, buscar a presença de Jesus e influenciar vidas através de louvores inspirados pelo Espírito Santo.</TitleText>
      <TextRegular size="m" color="gray">A banda teve iníciou com Kiscylla e Winicius inspirados por Deus, iniciaram o processo de dedicação na composição de músicas autorais. Com isso, diversas canções foram inspiradas, entre elas: "Era pra ser eu", "Viver pra Ti (Deus de Poder)", "Foi no Deserto" , dentre outras.</TextRegular>
     </ContainerText>
     
     
      
    </ContainerAbout>
  )
}

