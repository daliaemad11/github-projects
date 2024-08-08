import { Link, Outlet } from "react-router-dom";
import './homepage.css'
import profile from '../../assets/images/image-avatar.png'
import carticon from '../../assets/images/icon-cart.svg'
function Homepage(){
    return (
        <>
        <div id="navbar">
        <label id="sitetitle">Sneakers</label>
         <nav>
          <label className="links">
            <Link to="/collections">Colliections</Link>
          </label>
          <label className="links">
            <Link to="/men">Men</Link>
          </label>
          <label className="links">
            <Link to="/women">Women</Link>
          </label>
          <label className="links">
            <Link to="/about">about</Link>
          </label>
          <label className="links">
            <Link to="/contact">Contact</Link>
          </label>
      </nav>
      <div id="imgs">
      <img id="cart" src={carticon}/>
      <img id="profile" src={profile}/>
      </div>
      </div>
     

      <Outlet></Outlet>

      </>
    )
}
export default Homepage