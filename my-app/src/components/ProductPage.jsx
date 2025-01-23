import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import ImageSlider from './ImageSlider'

export default function ProductPage() {

    let [ products, setProducts ] = useState( [] )
    return (
        <div className='container'>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts} />
            <ImageSlider/>
        </div>
    )
}