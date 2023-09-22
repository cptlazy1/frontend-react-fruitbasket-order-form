import React, { useState } from "react";
import './App.css';
import Fruit from "./components/Fruit.jsx";
import strawberryImage from "../src/assets/strawberry.svg";
import bananaImage from "../src/assets/banana.svg";
import appleImage from "../src/assets/apple.svg";
import kiwiImage from "../src/assets/kiwi.svg";
import logo from "../src/assets/screenshot-logo.png"
import FruitForm from "./components/FruitForm.jsx";

function App() {
    // Initiële aantallen worden op nul gezet.
    const initialQuantities = {
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0
    };
    // State hoeveelheden
    const [quantities, setQuantities] = useState(initialQuantities);

    // Functie die de hoeveelheid van één fruit aanpast in state
    const quantityChange = (fruit, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [fruit]: newQuantity
        }));
    };
    // Functie om alle aantallen op nul te zetten
    const resetQuantities = () => {
        setQuantities(initialQuantities);
    };

    // State form
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        postcode: "",
        deliveryFrequency: "",
        deliveryTime: "",
        remarks: "",
        agreeTermsAndConditions: false
    })

    function handleChange(e) {

        const changeFieldName = e.target.name
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setFormState({
            ...formState,
            [changeFieldName]: newValue
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            formState.firstName,
            formState.lastName,
            formState.age,
            formState.postcode,
            formState.deliveryFrequency,
            formState.deliveryTime,
            formState.remarks,
            formState.agreeTermsAndConditions,
            quantities.strawberry,
            quantities.banana,
            quantities.apple,
            quantities.kiwi
        )
    }

    return (
        <>
            <main className="page-container">

                <img src={logo} alt="company-logo"/>

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

                <button className="reset-button" type="button" onClick={resetQuantities}>Reset</button>

                <FruitForm
                    formState={formState}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    resetQuantities={resetQuantities}
                />
            </main>
        </>
    );
}

export default App;
