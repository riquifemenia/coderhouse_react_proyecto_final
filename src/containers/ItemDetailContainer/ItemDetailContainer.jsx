import { useProductDetail } from '../../hooks/useDataManager/useDataManager.js'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { Loader } from '../../components/Loader/Loader'

export const ItemDetailContainer = () => {

  const { detail, loading } = useProductDetail()

  return (
    <>
      <ItemDetail {...detail} />
      {loading && <Loader />}
    </>
  )
}