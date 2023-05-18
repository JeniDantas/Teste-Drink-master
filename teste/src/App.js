import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './Components/Rodape/Rodape';
import Produtos  from './Pages/Produtos/Produtos';
import Carrinho from './Pages/Carrinho/Carrinho'
import Pesquisa from './Pages/Pesquisa/Pesquisa';
import Marcas from './Components/Marcas/Marcas';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div className="App">
       <div className='principal'>
        <Router>

        <Header/>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
         
          
          <li>
          <Link to="/Produtos">Produtos</Link>
          </li>
        </ul>
        <Routes>
         <Route path='/Home' element={<Home/>}/> 
         <Route path='/Produtos' element={<Produtos/>}/>
         <Route path='/Carrinho' element={<Carrinho/>}/>
        </Routes>
       
        </Router>
    </div>
   
  


   <Rodape/>
    </div>
    
    
  );
}

export default App;
