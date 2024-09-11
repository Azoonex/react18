import { ChakraProvider } from '@chakra-ui/react'
import ExpenceList from './components/ExpenceList'



function App() {
  return (
    <>
      <ChakraProvider >
        <ExpenceList />
      </ChakraProvider>
    </>
  )
}

export default App
