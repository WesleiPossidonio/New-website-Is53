
import { SectionAbout } from "./components/SectionAbout"
import { Hero } from "./components/sectionHero"
import { ContainerHome } from "./styled"

export const Home = () => {
  return (
    <ContainerHome>
      <Hero />
      <SectionAbout />
    </ContainerHome>
  )
}

