
import HomeVideo from '../../../../assets/video-home.mp4'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { ButtonHero, ContainerHero, ContainerText, Video } from './styled'


export const Hero = () => {
  return (
    <ContainerHero>
      <Video src={HomeVideo} autoPlay loop muted />

      <ContainerText>
        <TitleText size='l' lineHeight='l' weight={300}>IS53</TitleText>
        <TextRegular size='m'>Lorem ipsum dolor sit amet consectetur elit.</TextRegular>

        <ButtonHero>últimos Lançamentos</ButtonHero>
      </ContainerText>

    
    </ContainerHero>
  )
}


