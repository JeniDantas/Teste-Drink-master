import React from "react";
import "./Home.css";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Marcas from "../../Components/Marcas/Marcas";


function Home (props){
    return (
            <div>
            <Carrousel/>
          <div className='principal'>
            <h3> Marcas mais vendidas</h3>
            <Marcas/>
        </div>
    </div>
                
           

           
        
       
       
    );
}

export default Home;