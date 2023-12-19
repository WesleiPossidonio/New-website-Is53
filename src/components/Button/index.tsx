import { ReactNode } from "react"
import { ContainerButton } from "./styled"

interface ButtonProps {
  children: ReactNode
  dashboard?: boolean
}

export const Button = ({children, dashboard, ...props}: ButtonProps) => {
  return (
    <ContainerButton {...props} dashboard={dashboard}>
        {children}
    </ContainerButton>
  )
}


