
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route }  from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      

      <ItemDetailContainer />
    </>
  )
}
export default App;


