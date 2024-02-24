
import '../assets/css/home.css'
import Sidebar from './Sidebar'
import Slideshow from './Slideshow'
import Navbar from './navbar'
import Footer from './Footer'



const Home = () => {
  return (
    <div>
    <Navbar/>  
    <Sidebar/>
    <Slideshow/>
    <br/><br/>
    <Footer/>
    </div>
    
  )
}

export default Home