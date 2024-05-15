import { useState } from 'react'

export const useCounter = (initialValue, stock) => {
    const [count, setCount] = useState(initialValue)

    const inicializar = () => {
        setCount(1)
    }

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }

    return {
        count,
        inicializar,
        incrementar,
        decrementar
    }
}
