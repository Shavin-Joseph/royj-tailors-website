import React from 'react';
export default function ProductImage({ product, back = false, eager = false, className = '' }) {
  const photo = <img src={back && product.backImage ? product.backImage : product.image}
      alt={product.name + (back ? ', back view' : ', front view')}
      loading={eager ? 'eager' : 'lazy'} decoding="async" />;
  return <div className={'product-photo ' + className}>
    {photo}
  </div>;
}
