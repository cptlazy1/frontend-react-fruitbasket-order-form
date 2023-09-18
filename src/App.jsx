import React, { useState } from "react";
import './App.css';
import Fruit from "./components/Fruit.jsx";
import strawberryImage from "../src/assets/strawberry.svg";
import bananaImage from "../src/assets/banana.svg";
import appleImage from "../src/assets/apple.svg";
import kiwiImage from "../src/assets/kiwi.svg";

function App() {
    const initialQuantities = {
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0
    };

    const [quantities, setQuantities] = useState(initialQuantities);

    const quantityChange = (fruit, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [fruit]: newQuantity
        }));
    };

    const handleReset = () => {
        setQuantities(initialQuantities);
    };

    return (
        <>
            <main className="page-container">
                <h1>Fruitmand bezorgservice</h1>

                <Fruit
                    fruitImage={strawberryImage}
                    fruitName="Aardbeien"
                    fruitDescription="illustration of a strawberry"
                    quantity={quantities.strawberry}
                    onQuantityChange={(newQuantity) => quantityChange("strawberry", newQuantity)}
                />
                <Fruit
                    fruitImage={bananaImage}
                    fruitName="Bananen"
                    fruitDescription="illustration of a banana"
                    quantity={quantities.banana}
                    onQuantityChange={(newQuantity) => quantityChange("banana", newQuantity)}
                />
                <Fruit
                    fruitImage={appleImage}
                    fruitName="Appels"
                    fruitDescription="illustration of an apple"
                    quantity={quantities.apple}
                    onQuantityChange={(newQuantity) => quantityChange("apple", newQuantity)}
                />
                <Fruit
                    fruitImage={kiwiImage}
                    fruitName="Kiwis"
                    fruitDescription="illustration of a kiwi"
                    quantity={quantities.kiwi}
                    onQuantityChange={(newQuantity) => quantityChange("kiwi", newQuantity)}
                />

                <button type="button" onClick={handleReset}>Reset</button>
            </main>
        </>
    );
}

export default App;
