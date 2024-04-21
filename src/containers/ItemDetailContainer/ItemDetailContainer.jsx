import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetailById } from '../../data/asyncMock'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { Loader } from '../../components/Loader/Loader'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductDetailById(itemId)
      .then((prod) => {
        setDetail(prod)
        setError(null)
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ItemDetail {...detail} />
          {loading && <Loader />}
        </>
      )}
    </>
  )
}
