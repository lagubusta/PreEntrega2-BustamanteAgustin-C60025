import './App.css';
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <main className="App">
     <NavBar></NavBar>
     <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
     <ItemDetailContainer></ItemDetailContainer>
      
    </main>
    
  );
}

export default App;
