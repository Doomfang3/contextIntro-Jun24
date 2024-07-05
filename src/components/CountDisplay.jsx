import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const CountDisplay = () => {
  const { count } = useContext(CountContext)

  return <p>{count}</p>
}

export default CountDisplay
