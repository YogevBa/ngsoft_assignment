import React from 'react';
import './productList.css';
import Product from '../product/Product';

const ProductList = (props) => {
  const renderProducts = props.products
    ? props.products.map((itm) => <Product key={itm.id} product={itm} />)
    : [];

  return <div className='listContainer'>{renderProducts}</div>;
};

export default ProductList;
