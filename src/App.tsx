import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { GlobalStyled } from "./styles/globalStyles"
import { Home } from "./pages/Home"


function App() {
  return (
    <>
     <ThemeProvider theme={DefaultThemes}>
      <GlobalStyled />
      <Home />
     </ThemeProvider>
    </>
  )
}

export default App
