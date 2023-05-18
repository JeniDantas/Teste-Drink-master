import React from "react";
import './Marcas.css';
import Card from "../Card/Card";
import  Brahma from "../../assets/Brahma.png";
import Heineken from "../../assets/Heineken.png";
import Budweiser from "../../assets/Budweiser.png";
import Original from "../../assets/Original.png";
import skol  from "../../assets/skol.png";


function Marcas(){

    return(
        
        <div className="container">
            <Card marca={Brahma}/>
            <Card marca={Budweiser}/>
            <Card marca={Heineken}/>
            <Card marca={Original}/>
            <Card marca={skol}/>

        </div>
     

      
    );
   
}
export default Marcas;