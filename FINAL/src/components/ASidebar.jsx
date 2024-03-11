// Sidebar.jsx

import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ASidebar.css'; 
// import '../assets/css/ANavbar.css';

const ASidebar = () => {
  const [menu, setMenu] = useState("anniversary");

  return (
    <div className="sidebar">
      <div className='nav-logo'>
        {/* <img src={logo} alt='' /> */}
        <p>
          <span style={{ fontFamily:'serif', fontWeight:'bold', fontSize:'20px'}}>GIFT CART</span>
        </p>
      </div>
      <ul className="sidebar-links">   
      </ul>
      <div className='nav-contents-main'>
        <Link to="/abirthday"> 
          <li className='nav-content-li' onClick={() => { setMenu("birthday") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/abirthday'>Birthday</Link>
            {menu === "birthday" ? <hr /> : <></>}
          </li>
        </Link>
        <br></br>
        <Link to="/aaniversary">
          <li className='nav-content-li' onClick={() => { setMenu("anniversary") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/aaniversary'>Anniversary</Link>
            {menu === "anniversary" ? <hr /> : <></>}
          </li>
        </Link>
        <br></br>
        <Link to="/corporate">
          <li className='nav-content-li' onClick={() => { setMenu("corporate") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Corporate'>Corporate Gifts</Link>
            {menu === "corporate" ? <hr /> : <></>}
          </li>
        </Link>
        <br></br>
        <Link to="/personalised">
          <li className='nav-content-li' onClick={() => { setMenu("personalised") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Personalised'>Personalised</Link>
            {menu === "personalised" ? <hr /> : <></>}
          </li>
        </Link>
        <br></br>
        <Link to="/Combo">
          <li className='nav-content-li' onClick={() => { setMenu("gift combos") }}>
            <Link style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to='/Combo'>Gift Combos</Link>
            {menu === "gift combos" ? <hr /> : <></>}
          </li>
        </Link>
        <br></br>

        <Link to="/orders">
          <li>
            <Link to="/orders">View Orders </Link>
          </li>
        </Link>
        <br></br>

        <Link to="/">
          <li>
            {/* <Link to="/logout">Logout</Link> */} 
            Logout
          </li>
        </Link>

      </div>       
    </div>
  );
}

export default ASidebar;
