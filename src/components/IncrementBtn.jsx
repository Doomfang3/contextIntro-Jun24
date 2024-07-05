import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const IncrementBtn = () => {
  const { handleIncrement } = useContext(CountContext)

  return (
    <button type='button' onClick={handleIncrement}>
      +
    </button>
  )
}

export default IncrementBtn
