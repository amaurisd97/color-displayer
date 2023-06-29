import { useContext } from 'react'
import { Context } from '../context/Context'

const Square = () => {
  const { input } = useContext(Context)
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: '1px solid gray',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${input}`
      }}>
      <p>{input ? `${input}` : 'Empty value'}</p>
    </div>
  )
}
export default Square
