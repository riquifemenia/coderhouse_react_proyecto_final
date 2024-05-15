import { Button, Flex, Box, Text } from '@chakra-ui/react'
import { useCounter } from '../../hooks/useCounter/useCounter.js'
import styles from './ItemCount.module.scss'
export const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, inicializar, incrementar, decrementar } = useCounter(initialValue, stock)

  if (stock === 0) {
    return (
      <Flex className={styles.Item} aria-disabled="true">
        <Text className={styles.ItemStockContainer}>Producto agotado</Text>
      </Flex>
    )
  } else {
    return (
      <Flex className={styles.Item}>
        <Flex className={styles.ItemStockContainer}>
          <Text>Disponibles</Text>
          <Text className={styles.ItemStock}>{stock}</Text>
        </Flex>

        <Flex className={styles.ItemAgregar}>
          <Flex className={styles.ItemCount}>
            <Button className={styles.ItemCountBoton} onClick={decrementar}>-</Button>
            <Box className={styles.ItemCountCantidad}>{count}</Box>
            <Button className={styles.ItemCountBoton} onClick={incrementar} disabled={count >= stock}>+</Button>
          </Flex>
          <Flex>
            <Button className={styles.ItemCountAgregarBoton} onClick={() => {
              onAdd(count)
              inicializar()
            }} variant='ghost'>
              Agregar al carrito
            </Button>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}