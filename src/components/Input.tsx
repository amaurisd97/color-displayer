import { useContext } from 'react'
import { Context } from '../context/Context'

const Input = () => {
  const { input, setInput } = useContext(Context)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div style={{ margin: 10 }}>
      <input
        style={{ width: 200, border: '1px solid gray', borderRadius: 10, padding: 7, outline: 'none' }}
        value={input}
        onChange={handleChange}
      />
    </div>
  )
}
export default Input
