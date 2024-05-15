import { useProductData } from '../../hooks/useDataManager/useDataManager.js'
import { ItemList } from '../../components/ItemList/ItemList'
import { Loader } from '../../components/Loader/Loader'

export const ItemListContainer = () => {
  const { products, loading } = useProductData()

  return (
    <>
      <ItemList products={products} />
      {loading && <Loader />}
    </>
  )
}
