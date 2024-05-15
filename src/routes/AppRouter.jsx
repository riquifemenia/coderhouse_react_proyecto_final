import { Route, Routes, useNavigate } from 'react-router-dom'
import { ItemListContainer } from '../containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../containers/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'
import { CheckoutContainer } from '../containers/CheckoutContainer/CheckoutContainer'
import { showAlert } from '../helpers/messageHelper/messageHelper.js'

const NotFound = () => {
  const navigate = useNavigate()
  showAlert({ icon: 'error', title: '¡Error!', message: 'Error 404. Página inexistente.', redirectUrl: '/' }, navigate)
  return null
}

export const AppRouter = () => {

  return (
    <div style={{ paddingTop: '8rem' }}>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckoutContainer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
