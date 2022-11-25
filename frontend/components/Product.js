import React from 'react'

export default function Products({ product }) {
  const {title, price, image} = product.attributes;

  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.large.url} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>${price}</h3>
    </div>
  )
}
