import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext, typeTabel } from '../context/Context'
import actionConecte from '../service/actionConecte';


export default function DataTabel() {

  const { dataTabel, setdataTabel } = useContext(ThemeContext);

  function DeleteHandler(id: number) {
    setdataTabel((prvious) => {
      return prvious.filter(i => i.id !== id)
    })
  }

  function fetchApi (){
      actionConecte.fetchApi('getapi').then(res => console.log(res.data))
  }

  function removeCelTabel (id:number){
    actionConecte.deleteUser(id).then(res => console.log(res))
  }

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>descrption</Th>
            <Th>status</Th>
            <Th>utility</Th>
            <Th>pending</Th>
          </Tr>
        </Thead>
        {dataTabel && dataTabel.length > 0 && dataTabel.map((i:typeTabel) => {
          return (
            <Tbody key={i.id}>
              <Tr>
                <Td>{i.id}</Td>
                <Td>{i.description}</Td>
                <Td>{i.status}</Td>
                <Td>{i.utility}</Td>
                <Td>{i.pending ? "Yes" : "No"}</Td>
                <Td>
                  <Button color={'red'} onClick={() => DeleteHandler(i.id)}>
                    Remove
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          )
        })}
      </Table>
    </TableContainer>
  )
}
