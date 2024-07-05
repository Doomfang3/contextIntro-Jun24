import { createContext, useState } from 'react'

export const CountContext = createContext()

const CountCountextProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <CountContext.Provider value={{ count, handleIncrement }}>{children}</CountContext.Provider>
  )
}

export default CountCountextProvider
