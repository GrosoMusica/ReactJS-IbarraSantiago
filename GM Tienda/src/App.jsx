
import './App.css'
import { BrowserRouter, Routes, Route }  from "react-dom";

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>


      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />

        <Route path='/tags/:tagsId' element={<ItemListContainer />} />

        <Route path='/item/:itemId' element={<ItemListContainer />} />

        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>


      <ItemListContainer saludar={"Bienvenido a Tienda GM" }/>
      
      <ItemDetailContainer />
      
    </BrowserRouter>
    </>
  )
}
export default App;


