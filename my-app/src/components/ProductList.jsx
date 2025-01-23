import React from 'react'

export default function ProductList({ products }) {

    const productsList = products.map((product, index) => {
        let buttonText = '';
        let buttonClass = '';

        // Ensure quantity is treated as a number
        const quantity = Number(product.quantity);

        if (quantity === 0) {
            buttonText = 'Sold Out';
            buttonClass = 'btn btn-danger rounded-pill m-2';
        } else if (quantity === 1) {
            buttonText = 'Buy Now';
            buttonClass = 'btn btn-warning rounded-pill m-2';
        } else if (quantity > 1) {
            buttonText = 'Buy Now';
            buttonClass = 'btn btn-success rounded-pill m-2';
        }

        return (
            <div className='col-sm-6 col-md-3' key={index}>
                <div className='bg-light text-dark p-4 rounded-3'>
                    <h1>{product.productName}</h1>
                    <p>{product.desc}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p>
                        {quantity === 0 ? 'No Product Available' : 
                         quantity === 1 ? 'Only One Product Available' : 
                         `${quantity} Products Available`}
                    </p>
                    <span className={`badge ${product.freeShipping ? 'bg-success' : 'bg-danger'}`}>
                        {product.freeShipping ? 'Free Shipping' : 'Delivery Cost : 2$'}
                    </span>
                    <button className={buttonClass} disabled={quantity === 0}>
                        {buttonText}
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div className="bg-dark text-light p-5 rounded-5">
            <h1 className='text-center mb-4'>Your Products</h1>
            <div className="row">
                {productsList}
            </div>
        </div>
    )
}
