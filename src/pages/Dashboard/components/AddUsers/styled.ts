import styled from "styled-components"
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CreateUserType = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: flex-start;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
  }

  > p {
    align-self: flex-start;
    margin-bottom: 0%.5rem;
  }
`

interface CreateButtonTypes {
  variant: 'true' | 'false'
}

export const CreateUserTypeButton = styled(RadioGroup.Item)<CreateButtonTypes>`
  width: 10rem;
 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 6px;
  padding: 0.8rem;

  font-size: 1rem;
  font-weight: 600;
 
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme['gray-300']};

  background: ${({theme}) => theme.colors["base-bd-card"]};
  cursor: pointer;
 
  svg {
    color: ${({ variant, theme }) => (variant === 'true' ? theme.colors["base-blue"] : theme.colors["base-red"])};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 2s;
    background: ${({theme}) => theme.colors["base-blue"]};
  }

  &[data-state='checked'] {
    color: #fff;
    background: ${({ variant, theme }) => (variant === 'true' ? theme.colors["base-blue"] : theme.colors["base-red"])};
  }

  svg {
    color: #d6d6d6;
  }
`