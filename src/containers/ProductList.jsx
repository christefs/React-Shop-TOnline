import React, { useState } from 'react';
//import '../styles/ProductList.scss';
import '@components/ProductItem';
import '@styles/ProductList.scss';

//Nuevo:
import useGetProducts from '../hooks/useGetProducts';

import ProductItem from '../components/ProductItem';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API);
    
    return(
        
        <section className="main-container">
            
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            
            
            </div>
        </section>

    );
}

export default ProductList;