import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
} from '@chakra-ui/react'
import CartContext from '../../contexts/CartContext/CartContext'
import { showAlert, showConfirm, showToast } from '../../helpers/messageHelper/messageHelper.js'
import { FaTrash } from 'react-icons/fa'
import styles from './Cart.module.scss'

export const Cart = () => {
  const { cart, cartAmount, removeItem, cartQuantity, clearCart } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (cart.length === 0) {
      showAlert({
        icon: 'info',
        title: 'El carrito se encuentra vacío',
        confirmButtonText: 'Cerrar',
        redirectUrl: '/'
      },
        navigate)
    }
  }, [cart, navigate])

  if (cart.length > 0) {
    return (
      <>
        <Flex className={styles.Cart}>
          <TableContainer className={styles.CartTableContainer}>
            <Table>
              <Thead className={styles.CartTableHead}>
                <Tr >
                  <Th>Producto</Th>
                  <Th >Cantidad</Th>
                  <Th >Precio</Th>
                  <Th >Subtotal</Th>
                  <Th ></Th>
                </Tr>
              </Thead>
              <Tbody className={styles.CartTableBody}>
                {
                  cart.map((prod) => (
                    <Tr key={prod.id}>
                      <Td fontWeight='bold'>{prod.nombre}</Td>
                      <Td >{prod.quantity}</Td>
                      <Td >${prod.precio}</Td>
                      <Td >${prod.precio * prod.quantity}</Td>
                      <Td >
                        <Button
                          className={styles.CartTableBodyDeleteButtom}
                          onClick={() => {
                            removeItem(prod.id)
                            showToast({ icon: '', title: 'Se eliminó el producto del carrito' })
                          }}
                        >
                          <FaTrash />
                        </Button>
                      </Td>
                    </Tr>
                  ))
                }
                <Tr fontWeight='bold'>
                  <Td></Td>
                  <Td></Td>
                  <Td>Total:</Td>
                  <Td>${cartAmount()}</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <TableContainer className={styles.CartResumenContainer}>
            <Table>
              <Thead className={styles.CartResumenHead}>
                <Tr >
                  <Th colSpan={2}>Resumen de la compra</Th>
                </Tr>
              </Thead>
              <Tbody className={styles.CartResumenBody}>
                <Tr>
                  <Td >Cantidad de productos:</Td>
                  <Td fontWeight='bold'>{cartQuantity()}</Td>
                </Tr>
                <Tr>
                  <Td >Total:</Td>
                  <Td fontWeight='bold'>${cartAmount()}</Td>
                </Tr>
                <Tr>
                  <Td colSpan={2}></Td>
                </Tr>

                <Tr>
                  <Td colSpan={2}>
                    <Link to='/checkout'>
                      <Button className={styles.CartResumenButtonFinalizar}>
                        Finalizar compra
                      </Button>
                    </Link>
                  </Td>
                </Tr>

                <Tr>
                  <Td colSpan={2}>
                    <Button
                      className={styles.CartResumenButtonSeguir}
                      onClick={() => {
                        navigate('/')
                      }}
                    >
                      Seguir comprando
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td colSpan={2}>
                    <Button
                      className={styles.CartResumenButtonVaciar}
                      onClick={() => {
                        showConfirm(
                          {
                            title: '¿Estás seguro?',
                            text: 'Esta acción eliminará todos los productos del carrito. ¿Deseas continuar?',
                            confirmButtonText: 'Confirmar',
                            cancelButtonText: 'Cancelar',
                          },
                          () => {
                            clearCart()
                            showToast({ icon: '', title: 'Se vació el carrito' })
                            navigate('/')
                          },
                          () => { })
                      }}
                    >
                      <span className={styles.CartResumenButtonVaciarIcon}>
                        <FaTrash />
                      </span>
                      Vaciar carrito
                    </Button>
                  </Td>
                </Tr>

              </Tbody>
            </Table>
          </TableContainer>
        </Flex >
      </>
    )
  }
}