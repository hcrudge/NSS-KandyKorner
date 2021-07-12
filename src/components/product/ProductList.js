import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProductTypes()
    .then(getProducts)

  }, [])


  return (
    <div className="products">
      {console.log("ProductList: Render", products)}
      {
        products.map(product => {
            const foundProductType = productTypes.find(productType => productType.id === product.productTypeId)
            
            console.log(foundProductType)
          return <ProductCard key={product.id} product={product} productType={foundProductType} />
        })
      }
    </div>
  )
}