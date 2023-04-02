import React from 'react';

const ImageItem = ({ product }) => {
    return (
        <figure>
            <img src={product.images[0]} alt={product.title} />
        </figure>
    );
}

export default ImageItem;