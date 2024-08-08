import './productcomponant.css'
import imgtwo from '../../../assets/images/image-product-1.jpg'
import imgthree from '../../../assets/images/image-product-3.jpg'
import imgfour from '../../../assets/images/image-product-2.jpg'
import imgfive from '../../../assets/images/image-product-4-thumbnail.jpg'

import imgone from '../../../assets/images/image-product-1-thumbnail.jpg'
import { useState } from 'react'
function Productcomponant(){
    const[show,setshow]=useState(imgone)
    function move(event){
        setshow(event.target.src)
    }
return(
    <>
    <div className="productcomponant">
    <img value={imgone} id='imgone' src={show}></img>
    <div id='otherimgs'>
        <img  onClick={move} className='imgtwo' src={imgtwo}>
        </img>
        <img onClick={move} className='imgtwo' src={imgthree}/>
        <img onClick={move} className='imgtwo' src={imgfour}/>
        <img onClick={move} className='imgtwo' src={imgfive}/>
    </div>
    </div>
    </>
)
}
export default Productcomponant