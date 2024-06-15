import React from "react";
import { useContext, useState, } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link className="nav-logo" onClick={()=>{setMenu("home")}} to="/">
        <img src={logo} alt="" />
        <p>Spin-Mania</p>
      </Link>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link className="nav-menu-link" to='/'>Home</Link>{ window.location.href === "http://localhost:3000/" ? <hr/> : <></> }</li>
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
  )
}

export default Navbar;