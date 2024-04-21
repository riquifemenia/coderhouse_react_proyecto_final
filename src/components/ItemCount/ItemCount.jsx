import { Button, Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'
import styles from './ItemCount.module.scss'

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1)

  const incrementar = () => {
    count < stock && setCount(count + 1)
  }
  const decrementar = () => {
    count > 1 && setCount(count - 1)
  }

  return (
    <Flex className={styles.Contador} >
      <Button className={styles.ContadorBoton} onClick={decrementar}>-</Button>
      <Box className={styles.ContadorCantidad}>{count}</Box>
      <Button className={styles.ContadorBoton} onClick={incrementar}>+</Button>
    </Flex>
  )
}


