

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartView from "./components/CartView/CartView.jsx";
import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter, Routes, Route }  from "react-router-dom";

// import { useState, useEffect } from 'react'
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./services/firebaseConfig.jsx";

import './App.css'
// import { collection } from "firebase/firestore";



function App() {



  return (
    <>
    <CartProvider>

    <BrowserRouter>

    <Navbar />
    
    
    <Routes>
      <Route path='/' element={<ItemListContainer welcome={"Bienvenido a Tienda GM" }/>}></Route>

      <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>

      <Route path='/:categoryId' element={<ItemListContainer welcome={"Category" } />}></Route>

      <Route path='/Cart' element={<CartView />}></Route>




    
    </Routes>

    </BrowserRouter>
    
    </CartProvider>
    
    </>
  )
}
export default App


