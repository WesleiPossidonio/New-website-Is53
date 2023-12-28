import { ChangeEvent, useState } from "react";
import { TitleText } from "../../../../components/typograph"
import { ContentDashboard } from "../../styled"
// import { formatDistanceToNow } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'
// import { useNavigate } from "react-router-dom";

import {
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TablePagination, 
  TableRow 
} from "@mui/material";

import { 
  ButtonTable,
  ListRequerimentTable, 
  TableContentList, 
  TableHeader2, 
  TableRowContentList 
} from "./styled";

import { useDataAgenda } from "../../../../contexts/AgendaContext";

export const ListGig = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  // const navigate = useNavigate()
  const {listAgenda, deleteList} = useDataAgenda()

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event)
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // const handleUpdateList = (id: string) => {
  //   const curatedList = listAgenda.filter((data) => data.id && data.id === id)

  //   const listSelected = Object.fromEntries(
  //     curatedList.map((item, index) => [`objeto${index + 1}`, item])
  //   )

  //   navigate('/lista-selecionada', {
  //     state: listSelected.objeto1,
  //   })

  //   console.log('selecionado =>', listSelected)
  // }

  const handleDeleteList = (id: string) => {
    deleteList(id)
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, listAgenda.length - page * rowsPerPage)

  return (
    <ContentDashboard>
      <TitleText size="m">Lista de Agendas</TitleText>

      <ListRequerimentTable>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nome da Igreja</TableHeader2>
              <TableHeader2>Nome da Cidade</TableHeader2>
              <TableHeader2>Data da Gig</TableHeader2>
              <TableHeader2>Concluir</TableHeader2>
              {/* <TableHeader2>Atualizae</TableHeader2> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (rowsPerPage > 0
                ? listAgenda.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : listAgenda
              ).map((data) => {
                return (
                  <TableRowContentList
                    key={data.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableContentList>
                      {data.church_name}
                    </TableContentList>
                    <TableContentList>
                      {data.address}
                    </TableContentList>
                    <TableContentList>
                      {data.agenda_date}
                    </TableContentList>
                    <TableContentList>
                      <ButtonTable onClick={() => data.id && handleDeleteList(data.id)}>Concluir</ButtonTable>
                    </TableContentList>
                    {/* <TableContentList>
                      <ButtonTable onClick={() => data.id && handleUpdateList(data.id)}>Atualizar</ButtonTable>
                    </TableContentList> */}
                    
                  </TableRowContentList>
                )
              })
            }

            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={
            listAgenda
              && listAgenda.length
          }
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Itens por página:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </ListRequerimentTable>
    </ContentDashboard>
  )
}


