import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { GlobalStyled } from "./styles/globalStyles"
import { Router } from "./routes"
import { AppProvider } from "./contexts"
import { BrowserRouter } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={DefaultThemes}>
            <ToastContainer theme="dark" />
            <GlobalStyled />
            <Router />
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
