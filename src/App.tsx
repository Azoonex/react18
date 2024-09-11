import { ChakraProvider } from '@chakra-ui/react'
import ExpenceList from './components/ExpenceList'
import { Context_data } from './context/Context'
import DataTabel from './components/DataTabel'


function App() {
  return (
    <>
      <ChakraProvider>
        <Context_data>
          <ExpenceList />
          <DataTabel />
        </Context_data>
      </ChakraProvider>
    </>
  )
}

export default App
