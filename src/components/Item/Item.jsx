import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Box, Button, Image, Center, Flex } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount'
import styles from './Item.module.scss'

export const Item = ({ id, nombre, precio, img, stock }) => {
  return (
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
          <Text className={styles.ItemPrecio}>${precio}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter flexDirection='column'>
        <Link className={styles.ItemVerDetalleBoton} to={`/item/${id}`} variant='ghost'>
          Ver detalle
        </Link>
        <Flex className={styles.ItemAgregar} flexDirection='row'>
          <ItemCount stock={stock} />
          <Button className={styles.ItemAgregarBoton} variant='ghost' isDisabled={true}>
            Agregar al carrito
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}
