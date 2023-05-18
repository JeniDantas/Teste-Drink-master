import React from "react";
import "./Produtos.css";
import { useState } from 'react';
import ListDrink from "../../Components/List-Drink/ListDrink";
import DetailsDrink from "../../Components/Details-Drink/DetailsDrink";
import Context from '../../Components/utils/Context';
import ShopCartDrink from "../../Components/Shop-Cart-Drink/ShopCartDrink"

function Produtos (props){
    const [detailsDrink, setDetailsDrink] = useState({})
  const [shopCart, setShopCart] = useState([])
    return (

        <Context.Provider value={{detailsDrink, setDetailsDrink,shopCart,setShopCart}}>
         <ListDrink/>
        <DetailsDrink/>
        <ShopCartDrink/>
      </Context.Provider>
      
    )
}

export default Produtos;