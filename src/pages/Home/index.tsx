
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SectionAbout } from "./components/SectionAbout"
import { SectionAgenda } from "./components/SectionAgenda"
import { SectionNews } from "./components/SectionNews"
import { Hero } from "./components/sectionHero"
import { SectioStore } from "./components/sectionStore"
import { ContainerHome } from "./styled"

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Hero />
      <SectionAbout />
      <SectionNews />
      <SectioStore />
      <SectionAgenda />
      <Footer />
    </ContainerHome>
  )
}

