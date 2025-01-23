import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function ProductForm( props ) {
    let { products, setProducts } = props
    let [ productForm, setProductForm ] = useState( {
        productName: '',
        desc: '',
        price: 0,
        quantity: 0,
        freeShipping: false
    } )

    let getInputValue = ( e ) => {
        const { name, value, checked, type } = e.target;
        setProductForm( prevForm => ({
            ...prevForm,
            [ name ]: type === 'checkbox' ? checked : value
        }));
    }

    let productHandler = ( e ) => {
        e.preventDefault();
        setProducts( [ ...products, productForm ] );
        setProductForm( {
            productName: '',
            desc: '',
            price: 0,
            quantity: 0,
            freeShipping: false
        } );
    }

    return (
        <div className='alert mt-5'>
            <h1 className='text-center'>Product Data</h1>
            <Form className='w-50 mx-auto' onSubmit={productHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.productName} type="text" placeholder="Enter Product Name" name="productName" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.price} type="number" placeholder="Enter Product Price" name="price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.quantity} type="number" placeholder="Enter Product Quantity" name="quantity" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.desc} type="text" placeholder="Enter Product Description" name="desc" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check onChange={getInputValue} type="checkbox" label="Free Shipping" name='freeShipping' checked={productForm.freeShipping} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add New Product
                </Button>
            </Form>
        </div>
    )
}


