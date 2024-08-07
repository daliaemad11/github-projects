import './Card.css'
import profile from '../../assets/images/image-victor.jpg'
import topcardimg from '../../assets/images/bg-pattern-card.svg'
function Card(){
return(
    <>
    <div id="maindiv">
<div id='topcard'>
    <img id='topcardimg'src={topcardimg}/>
</div>
<div id='bottomcard'>
   <div id='details'>
   <img id='profile'src={profile}/>
    <label id='name'> vector crest <span>26</span></label>
    <label id='country'>london</label>
   </div>
    <hr></hr>
    <div className='numbers'>
        <div className='num'>
            <label>80 k</label>
            <label className='numname'>followers</label>
        </div>
        <div className='num'>
            <label>803 k</label>
            <label className='numname'>liks</label>
        </div>
        <div className='num'>
            <label>1.4 k</label>
            <label className='numname'>photos</label>
        </div>
    </div>
</div>
    </div>
    </>
)
}
export default Card