import React from 'react';
import OrderOverview from '../components/OrderOverview';
import Price1 from '../components/Price1';
import '../styles/Orders.scss';

const Orders = () => {
    return (
        <div className="the-orders">
            <div className="orders-container">
                <h1 className="orders-title">My orders</h1>

                <div className="orders-content">
                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src="./icons/flechita.svg" alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src="./icons/flechita.svg" alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src="./icons/flechita.svg" alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src="./icons/flechita.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Orders;