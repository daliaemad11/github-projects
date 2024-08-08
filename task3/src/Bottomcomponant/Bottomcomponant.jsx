import './Bottomcompanant.css'
import Socialbuttons from '../Buttons/Buttons'
function bottom(){
    const arrayobject=[
        {linkname:'GitHub',
            uniqueid:1
        },
        {linkname:'Frontend Mentor',
            uniqueid:2
        },
        {linkname:'Linkedin',
            uniqueid:3
        },
        {linkname:'Twitter',
            uniqueid:4
        },
        {linkname:'instagram',
            uniqueid:5

        }
    ]
    return(
        <div id="bottomcompanant">
            {arrayobject.map((item) =>{
                return(
                    <Socialbuttons
                    Key={item.uniqueid}
                     linkname={item.linkname}
                     ></Socialbuttons>


                )
            })}
            

        </div>
    )
}
export default bottom