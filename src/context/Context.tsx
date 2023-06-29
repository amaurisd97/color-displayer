import { createContext, useState } from 'react'

const input = ''
const setInput: React.Dispatch<React.SetStateAction<string>> = (value: React.SetStateAction<string>) => {
  value
}
export const Context = createContext({ input, setInput })

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState('')
  const inputHandler = {
    input,
    setInput
  }
  return <Context.Provider value={inputHandler}>{children}</Context.Provider>
}
