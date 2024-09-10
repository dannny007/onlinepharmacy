import { useState } from "react";
import Home from "./componenets/Home/Home";
import ProductPage from "./componenets/Product/ProductPage";
import "./App.css";
import { ProductProvider } from "./Contexts/Productcontext";
import { Route, Routes } from "react-router-dom";
import Root from "./componenets/Root";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;
