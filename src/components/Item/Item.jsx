import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Box, Button, Image, Center, Flex } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount'
import CartContext from '../../contexts/CartContext/CartContext'
import { showToast } from '../../helpers/messageHelper/messageHelper.js'
import styles from './Item.module.scss'

export const Item = ({ id, nombre, precio, img, stock }) => {

  const { addItem, availableCount } = useContext(CartContext)

  const onAdd = (quantity) => {
    const item = {
      id, nombre, precio, stock
    }
    addItem(item, quantity)
    showToast({ icon: '', title: 'Se agregó el producto al carrito' })
  }

  return (

    <>
      {id && nombre && precio && img &&
        <Card className={styles.Item}>
          <CardBody>
            <Center>
              <Image
                className={styles.ItemImage}
                src={img}
                alt={nombre}
              />
            </Center>
            <Stack mt='10'>
              <Heading className={styles.ItemTitulo}>{nombre}</Heading>
              <Box className={styles.ItemPrecioDetalle}>
                <Text className={styles.ItemPrecio}>${precio}</Text>
                {stock > 0 &&
                  <Link className={styles.ItemVerDetalleBoton} to={`/item/${id}`} variant='ghost'>
                    Ver detalle
                  </Link>
                }
              </Box>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className={styles.ItemFooter}>
            <ItemCount stock={availableCount(id, stock)} initialValue={1} onAdd={onAdd} />
          </CardFooter>
        </Card >
      }
    </>
  )
}