import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import CartContext from '../../contexts/CartContext/CartContext'
import { Checkout } from '../../components/Checkout/Checkout'
import { validateInput } from '../../helpers/validateInputHelper/validateInputHelper'
import { showAlert, showConfirm } from '../../helpers/messageHelper/messageHelper.js'

export const CheckoutContainer = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phone: '',
  })

  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const { cart, cartAmount, clearCart } = useContext(CartContext)

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }))
  }

  const validateForm = () => {
    let errors = {}

    if (!user.name) {
      errors.name = 'Debés agregar tu nombre'
    }

    if (!user.email) {
      errors.email = 'Debés agregar tu email'
    } else if (!validateInput(user.email, 'email')) {
      errors.email = 'El email no es válido'
    } else if (user.email !== user.repeatedEmail) {
      errors.repeatedEmail = 'Los emails no coinciden'
    }

    if (!user.phone) {
      errors.phone = 'Debés agregar tu número de teléfono'
    } else if (!validateInput(user.phone, 'phone')) {
      errors.phone = 'El número de teléfono debe contener entre 6 y 10 números'
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const getOrder = async () => {
    if (validateForm()) {
      const ordersCollection = collection(db, 'orders')

      try {
        const order = {
          buyer: user,
          cart: cart,
          total: cartAmount(),
          fechaDeCompra: Timestamp.now(),
        }

        showConfirm(
          {
            title: '¿Estás seguro?',
            text: 'Esta acción finalizará y confirmará tu compra. ¿Deseas continuar?',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
          },
          () => {
            addDoc(ordersCollection, order)
              .then((orderDocRef) => {
                showAlert({
                  icon: 'success',
                  title: '¡Gracias por tu compra!',
                  message: `El código del pedido es: ${orderDocRef.id}. Hemos enviado a tu correo electrónico las instrucciones para realizar el pago y programar el envío.`,
                  confirmButtonText: 'Cerrar',
                  functionToExec: clearCart,
                  redirectUrl: '/',
                }, navigate)
              })
              .catch((error) => {
                showAlert({
                  icon: 'error',
                  title: '¡Error!',
                  message: error.message,
                  confirmButtonText: 'Cerrar'
                }, navigate)
              })
          },
          () => {
          }
        )
      } catch (error) {
        showAlert({
          icon: 'error',
          title: '¡Error!',
          message: error.message,
          confirmButtonText: 'Cerrar'
        }, navigate)
      }
    } else {
      showAlert({ icon: 'error', title: '¡Error!', message: 'Por favor, corregí los errores en el formulario', confirmButtonText: 'Cerrar' })
    }
  }

  return (
    <Checkout
      user={user}
      updateUser={updateUser}
      errors={errors}
      getOrder={getOrder}
    />
  )
}
