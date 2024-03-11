import { useState } from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
// import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import { PiShoppingCartFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";


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
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Personalised'>Personalised themes</Link>
            {menu === "personalised" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/Combo">
          <li  className='nav-content-li' onClick={() => { setMenu("gift combos") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Combo'>Gift Combos</Link>
            {menu === "gift combos" ? <hr /> : <></>}
          </li>
          </Link>
          
          {/* <li style={{padding:'2px 5px 25px 10px'}}>   
          <FaRegHeart style={{color:'black',marginLeft:'4px',fontSize:'30px'}}/>
          </li> */}
          <li style={{padding:'4px 10px 10px 18px'}}>
          <Link to="/profile">
          <CgProfile  style={{color:'black',marginLeft:'40px',marginTop:'-20px',fontSize:'35px'}}/>
          </Link>
          </li>
          <li style={{padding:'2px 18px 10px 14px'}}>
          <Link to="/">
          <TbLogout  style={{color:'black',marginLeft:'36px',marginTop:'-15px',fontSize:'40px'}}/>
          </Link>
          </li>
          
        </div>       
      </ul>
    </div>
  );
}

export default Navbar;
