import React from 'react';
//import OrderOverview from '../components/OrderOverview';
//import Price1 from '../components/Price1';
//import '../styles/Orders.scss';
import OrderOverview from '@components/OrderOverview';
import Price1 from '@components/Price1';
import '@styles/Orders.scss';

import flechita from '@icons/flechita.svg';

const Orders = () => {
    return (
        <div className="the-orders">
            <div className="orders-container">
                <h1 className="orders-title">My orders</h1>

                <div className="orders-content">
                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src={flechita} alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src={flechita} alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src={flechita} alt="arrow" />
                    </div>

                    <div className="orders">
                    <OrderOverview />
                    <Price1 />
                    <img src={flechita} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Orders;