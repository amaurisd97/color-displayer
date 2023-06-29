import Input from './components/Input'
import Square from './components/Square'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <ContextProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Square />
        <Input />
      </div>
    </ContextProvider>
  )
}

export default App
