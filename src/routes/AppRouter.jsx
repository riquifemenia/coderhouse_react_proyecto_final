import { Route, Routes } from 'react-router-dom'
import { ItemListContainer } from '../containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../containers/ItemDetailContainer/ItemDetailContainer'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
      <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      <Route path='*' element={<ErrorMessage message='Error 404. Página inexistente.' />} />
    </Routes>
  )
}
