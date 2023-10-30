import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return(
    <div className='App'>
      < NavBar/>
      < ItemListContainer greating = "Bienvenidos"/>
    </div>
  )
}
  

export default App
