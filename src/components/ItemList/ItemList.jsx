import { Box, Flex } from '@chakra-ui/react'
import { Item } from '../Item/Item'
import styles from './ItemList.module.scss'

export const ItemList = ({ products }) => {

  return (
    <>
      <Flex className={styles.ItemList}>
        {products.map((elem) => (
          <Box key={elem.id}>
            <Item {...elem} />
          </Box>
        ))}
      </Flex>
    </>
  )
}
