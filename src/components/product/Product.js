import React from 'react';
import './product.css';
const Product = (props) => {
  console.log(props);
  return (
    <>
      <div className='productStyle'>
        <p>{props.product.inventoryName}</p>
        <p>{props.product.inventoryNumber}</p>
        <p>{props.product.casNumber}</p>
        <p>{props.product.molecularFormula}</p>
      </div>
    </>
  );
};

export default Product;
