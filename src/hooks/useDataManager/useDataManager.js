import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase.js'
import { showAlert } from '../../helpers/messageHelper/messageHelper.js'

const fetchProducts = async (categoryId) => {
  const coleccion = collection(db, 'products')
  const queryRef = !categoryId ? coleccion : query(coleccion, where('categoria', '==', categoryId || categoryId))
  const response = await getDocs(queryRef)

  const products = response.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return products
}

const fetchProductByItemId = async (itemId) => {
  try {
    const docRef = doc(db, 'products', itemId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const producto = {
        ...docSnap.data(),
        id: docSnap.id
      }
      return [producto]
    } else {
      return []
    }
  } catch (error) {
    throw 'Error al obtener el producto: ' + error
  }
}


const fetchOrders = async () => {
  const coleccion = collection(db, 'orders')
  const queryRef = coleccion
  const response = await getDocs(queryRef)

  const orders = response.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return orders
}

const stockUpdate = (products, orders) => {
  const productsUpdated = [...products]
  orders.forEach(order => {
    // Obtener de ordens la lista de productos vendidos
    const productsSold = order.cart

    // Iterar sobre cada producto vendido
    productsSold.forEach(productSold => {
      // Encontrar el producto correspondiente en el array de productos
      const productToUpdate = productsUpdated.find(product => product.id === productSold.id)

      // Restar la cantidad vendida del stock actual del producto
      if (productToUpdate) {
        productToUpdate.stock -= productSold.quantity
      }
    })
  })
  return productsUpdated
}

export const useProductData = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    const getData = async () => {
      try {
        const products = await fetchProducts(categoryId)
        const orders = await fetchOrders()
        const productsUpdated = stockUpdate(products, orders)
        setProducts(productsUpdated)
      } catch (error) {
        showAlert({
          icon: 'error',
          title: '¡Error!',
          message: 'Se produjo un error al acceder a los datos: ' + error.message,
          confirmButtonText: 'Cerrar',
          redirectUrl: '/'
        }, navigate)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [categoryId])

  return { products, loading }
}

export const useProductDetail = () => {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    const getProduct = async () => {
      try {
        const product = await fetchProductByItemId(itemId)
        const orders = await fetchOrders()
        const prod = stockUpdate(product, orders)
        setDetail(prod[0])
      } catch (error) {
        showAlert({
          icon: 'error',
          title: '¡Error!',
          message: error.message,
          confirmButtonText: 'Cerrar',
          redirectUrl: '/'
        }, navigate)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [itemId])

  return { detail, loading }
}
