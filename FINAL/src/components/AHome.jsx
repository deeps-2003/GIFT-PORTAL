
import '../assets/css/home.css'
// import AFooter from './AFooter';
import ASidebar from './ASidebar'
import ASlideshow from './ASlideshow';
// import ANavbar from './Anavbar';



const AHome = () => {
  return (
    <div className='ahome-front'>
    <ASidebar/>
    <div >
    {/* <ANavbar /> */}
    <div style={{marginLeft:'150px'}}>
    <ASlideshow/>
    </div>
    </div>
    </div>
    
  )
}

export default AHome;