import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext()

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }

    const addProductType = productTypeObj => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypeObj)
        })
        .then(getProductTypes)
    }

/*
        You return a context provider which has the
        `ProductTypes` state, `getProductTypes` function,
        and the `addProductType` function as keys. This
        allows any child elements to access them.
    */
        return (
            <ProductTypeContext.Provider value={{
                productTypes, getProductTypes, addProductType
            }}>
                {props.children}
            </ProductTypeContext.Provider>
        )
    };