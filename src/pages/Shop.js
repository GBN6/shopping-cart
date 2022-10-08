import React from "react";
import { useState, useEffect } from "react";

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    })

    const fetchProducts = async () => {
        const productsResponse = await fetch('https://fakestoreapi.com/products')
        let data = await productsResponse.json();
        console.log(data)
    }

    return (
        <div>
            <h1>STORE PAGE</h1>
        </div>
    )
}

export default Shop;