import './App.css';
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity )} > </ItemCount>
      
    </div>
    
  );
}

export default App;
