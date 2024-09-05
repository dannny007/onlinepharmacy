import { useState } from 'react'
import Home from './componenets/Home'
import './App.css'
import { ProductProvider } from './Context/Productcontext'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <ProductProvider>
     < Home />
    </ProductProvider>
  )
}

export default App
