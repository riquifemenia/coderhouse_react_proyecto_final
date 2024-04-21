import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import { ItemList } from '../../components/ItemList/ItemList'
import { Loader } from '../../components/Loader/Loader'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {

    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    setLoading(true)
    dataProductos
      .then((e) => setProducts(e))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ItemList products={products} />
          {loading && <Loader />}
        </>
      )}
    </>
  )
}
