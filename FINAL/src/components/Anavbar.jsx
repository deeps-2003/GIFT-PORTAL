import { useState } from 'react';
import '../assets/css/ANavbar.css';
import { Link } from 'react-router-dom';



const ANavbar = () => {
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
          <Link to="/abirthday"> 
          <li  className='nav-content-li' onClick={() => { setMenu("birthday") }}>
            <Link style={{textDecoration: 'none', whiteSpace: 'nowrap' }} to='/abirthday'>Birthday</Link>
            {menu === "birthday" ? <hr /> : <></>}
          </li>
          </Link>
          <Link to="/aaniversary">
          <li  className='nav-content-li' onClick={() => { setMenu("anniversary") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/aaniversary'>Anniversary</Link>
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
          
          
          
        </div>       
      </ul>
    </div>
  );
}

export default ANavbar;
