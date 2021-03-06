import React from "react"
import "./Product.css"

export const ProductCard = ({ product, productType}) => (
    <section className="product">
        <h3 className="product__name">{product.product}</h3>
        <div className="product__type">{productType.type}</div>
        <div className="product__price">{product.price}</div>
    </section>
)