import { useState } from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route }  from "react-dom";

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemCount from './components/ItemCounter/ItemCounter.jsx'

function App() {

  const [contar, setContar] = useState(0)
  
  return (
    <>
      <Navbar />
      <ItemListContainer welcome={"Bienvenido a Tienda GM" }/>
    </>
  )
}
export default App


