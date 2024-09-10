import React from 'react'

function Product(props) {
    // console.log(props)
    const{drug_type,drug_name,weight,Price} = props
// "drug_type": "Tablet",
//  "drug_name": "Tadalafil",
//  "weight": "10mg",
//  "Price": "10$",
//  "shipping_duration": "3days",
//  "shipping_cost": "3$",
//  "barcode":5677888455,
//  "rating": 3.5,
//  "prescription": "see doctor",
//  "manufacturers":"novartis",
//  "promo":true
  return (
    <div>
        <h1> {drug_name} </h1>
        <h2> Price - {Price} </h2> 
        <h3>Metric - {weight}</h3>
        <h3>Dosage Form - {drug_type}</h3>

        <button> Add to Cart</button>
    
     </div>
    
  )
}

export default Product
