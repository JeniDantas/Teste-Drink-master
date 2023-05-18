import React from "react";
import "./Card.css";


function Card(props){
    return(
        <div className="flex-item">
            <img className="marcas" src={props.marca} alt=""/>

        </div>
    );
   
}
export default Card;