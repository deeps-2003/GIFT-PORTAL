import { useState } from 'react';
import '../assets/css/Navbar.css';
// import logo from '../assets/images/logooo.jpg';
import { Link } from 'react-router-dom';
// import UserProfile from './UserProfile';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartFill } from "react-icons/pi";



const Navbar = () => {
  const [menu, setMenu] = useState("anniversary");

  return (
    <div >
  
      <ul className='nav-menu'>
        <div className='nav-logo'>

          {/* <img src={logo} alt='' /> */}
          <p>
            <span style={{ fontFamily:'serif', fontWeight:'bold',fontSize:'20px'}}>GIFT CART</span>
          </p>
        </div>
        <div className='nav-contents-main'>
          <Link to="/birthday"> 
          <li  className='nav-content-li' onClick={() => { setMenu("birthday") }}>
            <Link style={{textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Birthday'>Birthday</Link>
            {menu === "birthday" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/anniversary">
          <li  className='nav-content-li' onClick={() => { setMenu("anniversary") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Anniversary'>Anniversary</Link>
            {menu === "anniversary" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/corporate">
          <li  className='nav-content-li' onClick={() => { setMenu("corporate") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Corporate'>Corporate Gifts</Link>
            {menu === "corporate" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/personalised">
          <li  className='nav-content-li' onClick={() => { setMenu("personalised") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Personalised'>Personalised</Link>
            {menu === "personalised" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/Combo">
          <li  className='nav-content-li' onClick={() => { setMenu("gift combos") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Combo'>Gift Combos</Link>
            {menu === "gift combos" ? <hr /> : <></>}
          </li>
          </Link>
          
          <li style={{padding:'2px 5px 25px 10px'}}>   
          <FaRegHeart style={{color:'black',marginLeft:'4px',fontSize:'30px'}}/>
          </li>
          <li style={{padding:'2px 1px 30px 10px'}}>
          <Link to="/profile">
          <CgProfile  style={{color:'black',marginLeft:'6px',fontSize:'30px'}}/>
          </Link>
          </li>
          <li style={{padding:'2px 1px 20px 10px'}}>
          <PiShoppingCartFill style={{color:'black',marginLeft:'8px',fontSize:'40px'}}/>
          </li>
          
        </div>       
      </ul>
    </div>
  );
}

export default Navbar;
