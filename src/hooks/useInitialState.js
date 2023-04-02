import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,   //Mantener la información actual
            cart: [...state.cart, payload]  //Para el arreglo cart se mantiene la información actual y se agrega el nuevo elemento payload
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;