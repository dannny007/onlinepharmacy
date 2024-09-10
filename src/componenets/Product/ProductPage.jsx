import React, { useContext } from "react";
import { Productcontext } from "../../Contexts/Productcontext";
import Product from "../Nav/Product";

function ProductPage() {
  const { info } = useContext(Productcontext);

  const drugs = info.map((drug) => {
    return <Product {...drug} />;
  });

  return <div class="products">{drugs}</div>;
}

export default ProductPage;
