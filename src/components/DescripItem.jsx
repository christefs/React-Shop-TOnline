import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

const DescripItem = ({ product }) => {
    return (
        
        <p>{product.title}</p>
        
    );
}

export default DescripItem;