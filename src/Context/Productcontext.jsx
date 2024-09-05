
import React, { createContext, useState } from 'react'
import info from "../data/product.json"
export const Productcontext = createContext()


export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <Productcontext.Provider
      value ={{
        info , cart , setCart
       
      }}
    >
      {children}
    </Productcontext.Provider>
  )
}