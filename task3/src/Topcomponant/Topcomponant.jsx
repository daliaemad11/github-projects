import './Topcomponant.css'
import imgprofile from '../assets/assets/images/avatar-jessica.jpeg'
function Top(){
return(
    <div id="topcomponant">
        <img src={imgprofile} />
        <label id='name'> Jessica Randall</label>
        <label id='state'>London,United Kingdom </label>
        <label id='job'>"Front-end developer and avid reader."</label>

    </div>
)
}
export default Top