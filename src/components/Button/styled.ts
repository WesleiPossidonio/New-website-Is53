import styled from "styled-components";


interface ContainerButtonProps {
   dashboard?: boolean
}

export const ContainerButton = styled.button<ContainerButtonProps>`
   width: ${({dashboard}) => dashboard ? '15rem' : '100%'};
   height: 3.7rem;

   margin-top: ${({dashboard}) => dashboard ? '1.5rem' : '2.5rem'};

   font-size: 1.2rem;
   font-weight: 700;

   align-self: ${({dashboard}) => dashboard && 'flex-start'};

   border: none;
   border-radius: 8px;
   color: ${({theme}) => theme.colors["base-white"]};

   background-color: ${({theme}) => theme.colors["base-blue"]};

   cursor: pointer;
`