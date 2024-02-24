import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>  
        <li>
          <Link to="/">
          {/* <Link to="/logout">Logout</Link> */} Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
