import React from "react";
import "./Carrinho.css";
import { useState } from 'react';
import ShopCartDrink from "../../Components/Shop-Cart-Drink/ShopCartDrink"
import Context from '../../Components/utils/Context';

function Carrinho (props){
    const [detailsDrink, setDetailsDrink] = useState({})
  const [shopCart, setShopCart] = useState([])
    return (

        <Context.Provider value={{detailsDrink, setDetailsDrink,shopCart,setShopCart}}>
        <ShopCartDrink/> 
      </Context.Provider>
      
    )
}

export default Carrinho;