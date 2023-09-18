
import './App.css'
import Fruit from "./components/Fruit.jsx";

function App() {



  return (
    <>
        <main className="page-container">
        <h1>Fruitmand bezorgservice</h1>

            <Fruit
                fruitImage="./src/assets/strawberry.svg"
                fruitName="Aardbeien"
                fruitDescription="illustration of a strawberry">

            </Fruit>
            <Fruit
                fruitImage="./src/assets/banana.svg"
                fruitName="Bananen"
                fruitDescription="illustration of a strawberry">

            </Fruit>
            <Fruit
                fruitImage="./src/assets/apple.svg"
                fruitName="Appels"
                fruitDescription="illustration of a strawberry">
            </Fruit>
            <Fruit
                fruitImage="./src/assets/kiwi.svg"
                fruitName="Kiwis"
                fruitDescription="illustration of a strawberry">
            </Fruit>

            <button type="button" >Reset</button>
        </main>
    </>
  )
}

export default App
