
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/Container/ItemListContainer"


function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Tienda GM "} />
    </>
  )
}

export default App
