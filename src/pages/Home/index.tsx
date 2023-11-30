
import { SectionAbout } from "./components/SectionAbout"
import { SectionAgenda } from "./components/SectionAgenda"
import { SectionNews } from "./components/SectionNews"
import { Hero } from "./components/sectionHero"
import { ContainerHome } from "./styled"

export const Home = () => {
  return (
    <ContainerHome>
      <Hero />
      <SectionAbout />
      <SectionNews />
      <SectionAgenda />
    </ContainerHome>
  )
}

