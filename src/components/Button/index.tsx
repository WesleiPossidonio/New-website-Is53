import { ReactNode } from "react"
import { ContainerButton } from "./styled"

interface ButtonProps {
  children: ReactNode
  dashboard?: boolean
}

export const Button = ({children, dashboard}: ButtonProps) => {
  return (
    <ContainerButton dashboard={dashboard}>
        {children}
    </ContainerButton>
  )
}


