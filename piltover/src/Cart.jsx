import React from 'react';

const Cart = ({ products }) => {
  return (
    <div className="cart">
      {Object.values(products).map(product => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>   
          <p className='product-info'>{product.introduct + product.title}</p>  
        </div>
      ))}
    </div>
  );
};

export default Cart;
