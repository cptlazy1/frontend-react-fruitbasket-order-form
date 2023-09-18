// eslint-disable-next-line react/prop-types

import React from "react";

// eslint-disable-next-line react/prop-types
function Fruit({ fruitImage, fruitDescription, fruitName, quantity, onQuantityChange }) {
    const decreaseQuantity = () => {
        if (quantity > 0) {
            onQuantityChange(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        onQuantityChange(quantity + 1);
    };

    return (
        <>
            <section className="fruit-container">
                <img className="fruit-image" src={fruitImage} alt={fruitDescription} />
                <h1>{fruitName}</h1>
                <button type="button" onClick={decreaseQuantity}> - </button>
                <p>{quantity}</p>
                <button type="button" onClick={increaseQuantity}> + </button>
            </section>
        </>
    );
}

export default Fruit;
