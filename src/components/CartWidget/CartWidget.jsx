import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Badge } from '@chakra-ui/react'
import { FaCartShopping } from 'react-icons/fa6'
import CartContext from '../../contexts/CartContext/CartContext'
import styles from './CartWidget.module.scss'

export const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)

  return (

    <Link to='/cart'>
      <Box position='relative'>
        <FaCartShopping className={styles.CartWidgetIcon} />
        {cartQuantity() > 0 && (
          <Badge
            className={styles.CartWidgetBadge}
            variant='solid'
          >
            {cartQuantity()}
          </Badge>
        )}
      </Box>
    </Link>
  )

}
