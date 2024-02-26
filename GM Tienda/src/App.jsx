// import { useState } from 'react' 
// import reactLogo from './assets/react.svg' 
// import viteLogo from '/vite.svg'  
// import './App.css'

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
