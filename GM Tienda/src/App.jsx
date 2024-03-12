
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemCounter from './components/ItemCounter/ItemCounter.jsx'


function App() {

//   const agregarSamples = (cantidad) => {
//     // Lógica para agregar la cantidad de muestras
// };
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Tienda GM "} />

      <ItemCounter ini={1} stock={10} agregar={agregarSamples} />

    </>
  )
}

export default App
