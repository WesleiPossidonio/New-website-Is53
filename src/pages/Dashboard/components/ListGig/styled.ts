import styled from "styled-components";

import { TableContainer, TableCell, TableRow } from '@mui/material'
import { styled as muiStyled } from '@mui/material/styles'

export const ListRequerimentTable = styled(TableContainer)`
  height: max-content;
  max-height: 450px;
  margin-top: 2rem;
  padding: 0 1rem;
  background: transparent !important;
  border: 1px solid ${({theme}) => theme.colors["base-gray"]};
  border-radius: 6px;
  margin-bottom: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

`

export const TableHeader2 = muiStyled(TableCell)({
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    color: '#fff',

}) as typeof TableCell
  
export const TableRowContentList = muiStyled(TableRow)({
    '&:hover': {
      backgroundColor: '#000',
      cursor: 'pointer',
    },
}) as typeof TableRow
  
export const TableContentList = muiStyled(TableCell)({
  marginBottom: '2rem',
  color: '#fff',
  zIndex: '2'
}) as typeof TableCell
  
export const ButtonTable = styled.button`
  padding: 0.5rem;
  background-color: ${({theme}) => theme.colors["base-blue"]};

  border: none;
  border-radius: 4px;

  color: ${({theme}) => theme.colors["base-white"]};
  cursor: pointer;
  z-index: 15;

  &:hover {
    opacity: 0.7;
  }
`