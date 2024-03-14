import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route }  from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {

  return (
    <>
    <BrowserRouter>

    <Navbar />
    
    
    <Routes>
      <Route path='/' element={<ItemListContainer welcome={"Bienvenido a Tienda GM" }/>}></Route>

      <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>

      <Route path='/:categoryId' element={<ItemListContainer welcome={"Category" } />}></Route>


    
    </Routes>

    </BrowserRouter>
    </>
  )
}
export default App


