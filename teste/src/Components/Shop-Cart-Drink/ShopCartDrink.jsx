import React,{useContext} from 'react'
import './ShopCartDrink.css'
import {BsFillCartXFill} from 'react-icons/bs'
import Drink_Kart from '../../Img/bebida2.png'
import Context from '../utils/Context'

function ShopCartDrink() {
    const {shopCart}= useContext(Context)

    return (
        <div className="Container_ShopCartDrink">
            <div className="Components_ShopCartDrink">
            <h3 className='title-my-kart'>My Cart</h3>
            <span className='cart-status'>{shopCart.length}</span>
            {shopCart.map((drink)=>{
                return (
                    <div key={drink.id} className="Check-Box-cart-Drink">
                       {/* <input type="checkbox" /> */}
                            <div className="Container-img-drink-kart">
                                <div className="img-drink-kart">
                                    <img src={drink.thumbnail} alt="img-drink" className='img-drink' width='70px'/>
                                </div>
                                <div className='model-price-drink'>
                                    <h6>{drink.title}</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <p>{drink.price}</p>
                                </div>
                                <button className='btn-delete-Product' ><BsFillCartXFill/></button>
                            </div>        
                    </div> 
                )
            })}
            {/* <div className="Check-Box-cart-Drink">
                <input type="checkbox" />
                    <div className="Container-img-drink-kart">
                        <div className="img-drink-kart">
                            <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                        </div>
                        <div className='model-price-drink'>
                            <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>$ 7,99</p>
                        </div>
                        <button className='btn-delete-Product' ><BsFillCartXFill/></button>
                    </div>        
            </div>  */}
            {/* <div className="Check-Box-cart-Drink">
                <input type="checkbox" />
                    <div className="Container-img-drink-kart">
                        <div className="img-drink-kart">
                            <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                        </div>
                        <div className='model-price-drink'>
                            <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>$ 7,99</p>
                        </div>
                        <button className='btn-delete-Product' ><BsFillCartXFill/></button>
                    </div>        
            </div>    

                <div className="Check-Box-cart-Drink">
                <input type="checkbox" />
                    <div className="Container-img-drink-kart">
                        <div className="img-drink-kart">
                            <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                        </div>
                        <div className='model-price-drink'>
                            <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>$ 7,99</p>
                        </div>
                        <button className='btn-delete-Product' ><BsFillCartXFill/></button>
                    </div>        
            </div>    */}

                <div className="Footer_Kart">
                    <h6 className='title-total-drink'>Total:{shopCart.reduce((soma,drink)=>soma+drink.price,0)}</h6>
                    <button className='btn-drink-kart'>Concluir</button>
                </div>    
            </div>
        </div>
  )
}

export default ShopCartDrink