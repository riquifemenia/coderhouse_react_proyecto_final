import { Card, CardBody, Text, Flex, Image, CloseButton, Center, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './ErrorMessage.module.scss'

export const ErrorMessage = ({ message }) => {

  return (

    <Flex className={styles.ErrorMessage}>
      <Card className={styles.ErrorMessageCard}>
        <CardBody>
          <Link className={styles.ErrorClose} to={`/`}>
            <CloseButton className={styles.ErrorCloseButton} />
          </Link>
          <Center>
            <Image
              className={styles.ErrorMessageImage}
              src={'/src/components/ErrorMessage/assets/oops.png'}
              alt={'Imagen error'}
            />
          </Center>
          <Stack mt='10'>
            <Text className={styles.ErrorMessageTitulo}>¡ERROR!</Text>
            <Text className={styles.ErrorMessageTexto}>{message}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>

  )
}


