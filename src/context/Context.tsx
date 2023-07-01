import { createContext, useState } from 'react'

interface ContextValues {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export let Context: React.Context<ContextValues>

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState('')
  Context = createContext({ input, setInput })

  const inputHandler = {
    input,
    setInput
  }
  return <Context.Provider value={inputHandler}>{children}</Context.Provider>
}
