import './Inforcomponant.css'
import logo from '../../assets/images/logo.svg'
import buttonicon from '../../assets/images/icon-arrow.svg'
function Information() {
    
    return (
        <div id='leftinfo'>
            <div id='logo'>
                <img id='logoimg'src={logo}/>
            </div>
            <div id='bodypage'>
                <h1><label id='colorword'>W E ' R E</label> C O M I N G<br/> S O O N</h1>
                <p id='describtion'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
            <div id='inputtext'>
                <input type='text' placeholder='Email Address'/>
                <button>
                    <img id='buttonicon'src={buttonicon}/>
                </button>
                
            </div>
        </div>
    )
}
export default Information