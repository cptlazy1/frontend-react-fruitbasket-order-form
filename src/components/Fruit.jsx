import {useState} from "react";

function Fruit({ fruitImage, fruitDescription, fruitName, fruitQuantity }) {

    const [quantity, setQuantity] = useState(0)

    return (
        <>
            <section className="fruit-container">
                <img className="fruit-image" src={fruitImage} alt={fruitDescription}/>
                <h1>{fruitName}</h1>
                <button type="button" onClick={() => quantity === 0 ? quantity : setQuantity(quantity - 1)}>-</button>
                <p>{quantity}</p>
                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
            </section>
        </>
    )
}

export default Fruit;