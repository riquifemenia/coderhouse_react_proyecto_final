import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image, Center, Flex, CloseButton } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import styles from './ItemDetail.module.scss'

export const ItemDetail = ({ nombre, precio, img, stock, descripcion, categoria }) => {
  return (
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
            <Text className={styles.ItemDetailStock} > Stock: {stock}</Text>
            <Flex className={styles.ItemDetailAgregar} flexDirection='row'>
              <ItemCount stock={stock} />
              <Button className={styles.ItemDetailAgregarBoton} variant='ghost' isDisabled={true}>
                Agregar al carrito
              </Button>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </Flex>
  )
}
