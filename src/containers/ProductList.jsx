import React, { useState } from 'react';
//import '../styles/ProductList.scss';
import '@styles/ProductList.scss';

//Nuevo:
import useGetProducts from '../hooks/useGetProducts';

import addToCart from '@icons/bt_add_to_cart.svg';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    
    const products = useGetProducts(API);

    const [cart, setCart] = useState([]);

    const handleClick = () =>{
        setCart([]);
    }

    return(
        
        <section className="main-container">
            
            <div className="cards-container">
                {products.map(product => (
                    <div className="product-card">
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <div className="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div>
                        <figure onClick={handleClick} >
                            <img src={addToCart} alt="" />
                        </figure>
                        
                        </div>
                    </div>
                ))}
            
            
            </div>
        </section>

    );
}

export default ProductList;