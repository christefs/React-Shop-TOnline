import React, { useContext } from 'react';
import '@styles/MyOrder.scss';
import AppContext from '../context/AppContext';

import ImageItem from '@components/ImageItem';
import DescripItem from '@components/DescripItem';
import Price2Item from '@components/Price2Item';

import flechita from '@icons/flechita.svg';
import closing from '@icons/icon_close.png';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className="MyOrder-detail">
            <div className="MyOrder-title-container">
                <img src={flechita} alt="arrow" />
                <p className="MyOrder-title">My order</p>
            </div>

            <div className="MyOrder-content">
                {state.cart.map(product => (
                    <div className="MyOrder-shopping-cart" >
                        <ImageItem product={product} key={`orderItem-${product.id}`} />
                        <DescripItem product={product} key={`orderItem-${product.id}`} />
                        <Price2Item product={product} key={`orderItem-${product.id}`} />
                        <img src={closing} alt="close" />
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
        
        </aside>

    );
}

export default MyOrder;