import { CartWidget } from '../CartWidget/CartWidget'
import { Box, Flex, Spacer, Link } from '@chakra-ui/react'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <Flex className='navbar' align='center'>
      <Flex className='navbar-item' align='center'>
        <Link className='navbar-link' mr={16}>Tienda Lorem®</Link>
        <Link className='navbar-link' href='#'>Lorem artículos</Link>
      </Flex>
      <Spacer />
      <Box fontSize='2xl'>
        <CartWidget />
      </Box>
    </Flex>
  )
}
