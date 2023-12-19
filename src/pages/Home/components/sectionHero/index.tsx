
import HomeVideo from '../../../../assets/VideoHero.mp4'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { ButtonHero, ContainerHero, ContainerText, Video } from './styled'


export const Hero = () => {
  return (
    <ContainerHero id='Home'>
      <Video src={HomeVideo} autoPlay loop muted />

      <ContainerText>
        <TitleText size='l' lineHeight='l' weight={300}>IS53</TitleText>
        <TextRegular size='m'>Lorem ipsum dolor sit amet consectetur elit.</TextRegular>

        <ButtonHero to="news" smooth={true}>últimos Lançamentos</ButtonHero>
      </ContainerText>

    
    </ContainerHero>
  )
}


