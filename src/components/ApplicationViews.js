import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./product/ProductTypeProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            {/* Render the products list when http://localhost:3000/products */}
           
            <ProductTypeProvider>
            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
            </ProductTypeProvider>
       </>
    )
}
