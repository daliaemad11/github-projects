import './Imgcomponant.css'
import Img from '../../assets/images/hero-desktop.jpg'

function Image() {

    return(
        <div id="right">
            <img id="rightimg" src={Img}/>
        </div>
    )
    
}
export default Image;