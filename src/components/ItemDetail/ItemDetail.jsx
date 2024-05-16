import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image, Center, Flex, CloseButton } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Loader } from '../../components/Loader/Loader'
import CartContext from '../../contexts/CartContext/CartContext'
import { showToast } from '../../helpers/messageHelper/messageHelper.js'
import { FaCartShopping } from 'react-icons/fa6'
import styles from './ItemDetail.module.scss'

export const ItemDetail = ({ id, nombre, precio, img, stock, descripcion, categoria }) => {

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
      {id && nombre && precio && img && descripcion && categoria ? (
        <Flex className={styles.ItemDetail}>
          <Card className={styles.ItemDetailCard}>
            <CardBody>
              <Link className={styles.DetailClose} to={`/categoria/${categoria}`}>
                <CloseButton className={styles.DetailCloseButton} />
              </Link>
              <Center>
                <Image
                  className={styles.ItemDetailImage}
                  src={img}
                  alt={nombre}
                />
              </Center>
              <Stack mt='10'>
                <Heading className={styles.ItemDetailTitulo}>{nombre}</Heading>
                <Text className={styles.ItemDetailDescripcion}>{descripcion}</Text>
                <Text className={styles.ItemDetailPrecio}>${precio}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter flexDirection='column'>
              <Flex flexDirection='row'>
                <Flex className={styles.ItemDetailCount} flexDirection='row'>
                  <ItemCount stock={availableCount(id, stock)} initialValue={1} onAdd={onAdd} />
                </Flex>
                <Link to='/cart'>
                  <Button className={styles.ItemDetailFinalizar} variant='ghost'>
                    <FaCartShopping />
                  </Button>
                </Link>
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
      ) : (
        <Loader />
      )}
    </>
  )
}
