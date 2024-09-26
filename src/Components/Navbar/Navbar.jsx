import React from "react";
import { useContext, useState, } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import burger from "../Assets/burger.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleClass = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="navbar">
      <div className="nav-mobile">
        <Link className="nav-logo" onClick={()=>{setMenu("home")}} to="/spin-mania">
          <img src={logo} alt="logo" />
          <p>Spin-Mania</p>
        </Link>
        <img className="burger-icon"
          src={burger}
          alt="burger"
          onClick={toggleClass}
        />
      </div>
      
      <div className={
        isVisible ?
        "menu-container menu-container-visible" :
        "menu-container"
      }>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link className="nav-menu-link" to='/spin-mania'>Home</Link>{ window.location.href === "http://localhost:3000/spin-mania" ? <hr/> : <></> }</li>
          <li onClick={()=>{setMenu("rods")}}><Link className="nav-menu-link" to='/rods'>Rods</Link>{ window.location.href === "http://localhost:3000/rods" ? <hr/> : <></> }</li>
          <li onClick={()=>{setMenu("reels")}}><Link className="nav-menu-link" to='/reels'>Reels</Link>{ window.location.href === "http://localhost:3000/reels" ? <hr/> : <></> }</li>
          <li onClick={()=>{setMenu("lures")}}><Link className="nav-menu-link" to='/lures'>Lures</Link>{ window.location.href === "http://localhost:3000/lures" ? <hr/> : <></> }</li>
        </ul>

        <div className="nav-login-cart">
          <Link to='/login'><button onClick={()=>{setMenu("")}}>Login</button></Link>
          <Link to='/cart'><img onClick={()=>{setMenu("")}} src={cart_icon} alt=""/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;