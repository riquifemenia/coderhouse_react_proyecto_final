import { Box } from '@chakra-ui/react'
import { PulseLoader } from 'react-spinners'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <Box className={styles.Loader}>
      <PulseLoader className={styles.LoaderIcono}
        color='rgba(244, 232, 193, 0.7)'
        speedMultiplier={0.8}
        size={30}
      />
    </Box>
  )
}
