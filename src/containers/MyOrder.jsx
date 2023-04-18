import React, { useContext, useState } from 'react';
import '@styles/MyOrder.scss';
import AppContext from '../context/AppContext';

import ImageItem from '@components/ImageItem';
import DescripItem from '@components/DescripItem';
import Price2Item from '@components/Price2Item';

import flechita from '@icons/flechita.svg';
import closing from '@icons/icon_close.png';

const MyOrder = ({ product }) => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    const { removeFromCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    //Implementación:

    const [visible, setVisible] = useState(true);

    const removeOrder = () => {
        setVisible((visible) => !visible);
    }

    return (

        

        
            
       
            <aside className="MyOrder-detail">

                <div className='MyOrder-Container1'>
                          
                    <div className="MyOrder-title-container">
                    
                        <img src={flechita} alt="arrow" onClick={removeOrder}/>
                    
                        <p className="MyOrder-title">My order</p>
                    </div>


                    <div className="MyOrder-content">
                        {state.cart.map(product => (
                            <div className="MyOrder-shopping-cart" >
                                <ImageItem product={product} key={`orderItem-${product.id}`} />
                                <DescripItem product={product} key={`orderItem-${product.id}`} />
                                <Price2Item product={product} key={`orderItem-${product.id}`} />
                                <img src={closing} alt="close" onClick={() => handleRemove(product)} />
                            </div>
                        ))}
                        
                        
                        <div className="MyOrder">
                            <p>
                            <span>Total</span>
                            </p>
                            <p>${sumTotal()}</p>
                        </div>

                        <button className="MyOrder-primary-button">
                            Checkout
                        </button>
                    </div>

                    
                    </div>          
            </aside>


    );
}

export default MyOrder;