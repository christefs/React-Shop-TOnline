import React from 'react';
import OrderOverview from '../components/OrderOverview';
import Price1 from '../components/Price1';
import ImageItem from '../components/ImageItem';
import '../styles/Checkout.scss';
import DescripItem from '../components/DescripItem';
import Price2Item from '../components/Price2Item';

const Checkout = () => {
    return (
        <div className="checkout-my-order">
            <div className="checkout-my-order-container">
                <h1 className="checkout-title">My order</h1>

            <div className="checkout-my-order-content">
                <div className="checkout-order">
                    <OrderOverview />
                
                    <Price1 />
                </div>

                <div className="checkout-shopping-cart">
                    <ImageItem />
                    <DescripItem />
                    <Price2Item />
                </div>

                <div className="checkout-shopping-cart">
                    <ImageItem />
                    <DescripItem />
                    <Price2Item />
                </div>

                <div className="checkout-shopping-cart">
                    <ImageItem />
                    <DescripItem />
                    <Price2Item />
                </div>
            </div>
            </div>
        </div>

    );
}

export default Checkout;
