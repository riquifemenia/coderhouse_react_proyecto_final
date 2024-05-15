import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Flex, Box, Heading, FormControl, Input, Button, Table, Tbody, Tr, Td, TableContainer
} from '@chakra-ui/react'
import { showConfirm, showToast } from '../../helpers/messageHelper/messageHelper.js'
import CartContext from '../../contexts/CartContext/CartContext'
import { FaTrash } from 'react-icons/fa'
import styles from './Checkout.module.scss'

const InputWithError = ({ name, type, placeholder, value, onChange, error }) => (
  <Box className={styles.CheckoutInputWithError}>
    {<span className={styles.CheckoutErrorMsg}>&nbsp;{error}</span>}
    <Input className={styles.CheckoutInput} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
  </Box>
)

export const Checkout = ({ user, updateUser, errors, getOrder }) => {
  const { cartAmount, cartQuantity, clearCart } = useContext(CartContext)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      {cartAmount() > 0 && (
        <Flex className={styles.Checkout}>
          <TableContainer className={styles.CheckoutContainer} w={'30%'}>
            <Heading className={styles.CheckoutTitulo}>Resumen de la compra</Heading>
            <Table mb={'4rem'}>
              <Tbody className={styles.CheckoutBody}>
                <Tr>
                  <Td>Cantidad de productos:</Td>
                  <Td fontWeight='bold'>{cartQuantity()}</Td>
                </Tr>
                <Tr>
                  <Td>Total:</Td>
                  <Td fontWeight='bold'>${cartAmount()}</Td>
                </Tr>
              </Tbody>
            </Table>

            <Table>
              <Tbody className={styles.CheckoutBody}>
                <Tr>
                  <Td>
                    <Button
                      className={styles.CheckoutButtonSeguir}
                      onClick={() => {
                        navigate('/')
                      }}
                    >
                      Seguir comprando
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Button
                      className={styles.CheckoutButtonVaciar}
                      onClick={() => {
                        showConfirm(
                          {
                            title: '¿Estás seguro?',
                            text: 'Esta acción cancelará toda la compra. ¿Deseas continuar?',
                            confirmButtonText: 'Confirmar',
                            cancelButtonText: 'Cancelar',
                          },
                          () => {
                            clearCart()
                            showToast({ icon: '', title: 'Se canceló la compra' })
                            navigate('/')
                          },
                          () => { })
                      }}
                    >
                      <span className={styles.CheckoutButtonVaciarIcon}>
                        <FaTrash />
                      </span>
                      Cancelar compra
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Box className={styles.CheckoutContainer} w={'70%'} ml={'0px'}>
            <Heading className={styles.CheckoutTitulo}>Datos de facturación</Heading>
            <FormControl className={styles.CheckoutForm}>
              <InputWithError
                name="name"
                type="text"
                placeholder="Nombre y apellido"
                value={user.name}
                onChange={updateUser}
                error={submitted && errors.name}
              />
              <InputWithError
                name="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={updateUser}
                error={submitted && errors.email}
              />
              <InputWithError
                name="repeatedEmail"
                type="email"
                placeholder="Reiterar email"
                value={user.repeatedEmail}
                onChange={updateUser}
                error={submitted && errors.repeatedEmail}
              />
              <InputWithError
                name="phone"
                type="text"
                placeholder="Teléfono"
                value={user.phone}
                onChange={updateUser}
                error={submitted && errors.phone}
              />

              <Flex justifyContent={'right'}>
                <Button className={styles.CheckoutButtonFinalizar}
                  onClick={() => {
                    setSubmitted(true)
                    getOrder()
                  }}>
                  Finalizar compra
                </Button>
              </Flex>

            </FormControl>
          </Box>
        </Flex>
      )}
    </>
  )
}
