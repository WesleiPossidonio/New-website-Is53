
import HomeVideo from '../../../../assets/VideoHero.mp4'
import { TitleText } from '../../../../components/typograph'
import { ButtonHero, ContainerHero, ContainerText, Video } from './styled'


export const Hero = () => {
  return (
    <ContainerHero id='Home'>
      <Video src={HomeVideo} autoPlay loop muted />

      <ContainerText>
        <TitleText size='l' lineHeight='l' weight={300}>IS53</TitleText>
        <ButtonHero to="news" smooth={true}>últimos Lançamentos</ButtonHero>
      </ContainerText>

    </ContainerHero>
  )
}


