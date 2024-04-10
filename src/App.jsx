
import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { ListaPaises } from './components/ListaPaises/ListaPaises'

export const App = () => {
  return (
    <>

      <ChakraProvider>
        <NavBar />
        <ItemListContainer title={'Lorem Tienda'} />
        <ItemCount stock={7} />
        <ListaPaises />
      </ChakraProvider>


    </>
  )
}
