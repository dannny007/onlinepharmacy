import { useState } from 'react'
import Home from './componenets/Home/Home'
import ProductPage from './componenets/ProductPage'
import './App.css'
import { ProductProvider } from './Context/Productcontext'
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    
  
    <ProductProvider>
      <Routes>
      <Route path="home" element={<Home/>} />
      <Route path="product" element={<ProductPage />} />
      </Routes>
    </ProductProvider>
  )
}

export default App
