import minus from '../../../assets/images/icon-minus.svg'
import plus from '../../../assets/images/icon-plus.svg'
import './productdetails.css'
import carticon from '../../../assets/images/icon-cart.svg'
import { useState } from 'react'
function Productdetails(){
    const[item,setitem]=useState(0)
    function additem(){
        setitem(item+1)
    }
    function removeitem(){
        if(item>0){
    setitem(item-1)
        }
    }
    return(
    <>
    <div id="productdetails">
        <label id="title">SNEAKER COMPANY</label>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
       <div id='price'>
       <label id='newprice'>$125.00<span>50%</span></label>
       <label id='lastprice'><del>$250.00</del></label>
       </div>
        
        <div id='buybuttons'>
            <div id='buttons'>
            <button ><img onClick={additem} className='add' src={plus}/>
            </button>
            <label id='numitem'>{item}</label>
            <button><img onClick={removeitem} className='add' src={minus}/>
            </button>
            </div>
            <button id='buy'><img src={carticon}/> ADD TO CART</button>

        </div>
    </div>
    </>
)
}
export default Productdetails