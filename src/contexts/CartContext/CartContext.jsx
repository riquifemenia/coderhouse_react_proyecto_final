import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {

    const newProduct = { ...item, quantity }

    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    if (isInCart(newProduct.id)) {
      const updatedCart = cart.map((el) => {
        if (el.id === newProduct.id) {
          return { ...el, quantity: el.quantity + newProduct.quantity }
        }
        return el
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, newProduct])
    }
  }

  const removeItem = (id) => {
    const deleteItem = cart.filter((prod) => prod.id !== id)
    setCart([...deleteItem])
  }

  const clearCart = () => {
    setCart([])
  }

  const cartAmount = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
  }

  const cartQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  }

  const availableCount = (id, stock) => {
    const itemInCart = cart.find(item => item.id === id);
    if (!itemInCart) {
      return stock;
    }
    return stock - itemInCart.quantity;
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartAmount, cartQuantity, availableCount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext