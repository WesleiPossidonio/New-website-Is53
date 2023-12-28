
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useDataAgenda } from "../../contexts/AgendaContext"
import { SectionAbout } from "./components/SectionAbout"
import { SectionAgenda } from "./components/SectionAgenda"
import { SectionNews } from "./components/SectionNews"
import { Hero } from "./components/sectionHero"
import { SectioStore } from "./components/sectionStore"
import { ContainerHome } from "./styled"

export const Home = () => {
  const { listAgenda } = useDataAgenda()
  return (
    <ContainerHome>
      <Header />
      <Hero />
      <SectionAbout />
      <SectionNews />
      <SectioStore />
      {
         listAgenda.length > 0 && <SectionAgenda />
      }
      <Footer />
    </ContainerHome>
  )
}

