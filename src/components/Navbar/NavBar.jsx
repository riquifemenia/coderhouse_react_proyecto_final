import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { Box, Flex } from '@chakra-ui/react'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <Flex className={styles.NavBar} >
      <Link className={styles.NavBarBrand} to='/'>Dolce Dona®<br></br>Tienda</Link>

      <Flex className={styles.NavBarMenu}>
        <Link className={styles.NavBarLink} to='/'>Todos</Link>
        <Link className={styles.NavBarLink} to='/categoria/Donas' >Donas</Link>
        <Link className={styles.NavBarLink} to='/categoria/Cupcakes'>Cupcakes</Link>
        <Link className={styles.NavBarLink} to='/categoria/Paletas'>Paletas</Link>
      </Flex>

      <Box className={styles.NavBarCartWidget}>
        <CartWidget />
      </Box>
    </Flex>
  )
}