
import '../assets/css/home.css'
// import Sidebar from './Sidebar'
import Slideshow from './Slideshow'
import Navbar from './navbar'
import Footer from './Footer'
import About from './About'
import Review from './Review'



const Home = () => {
  return (
    <div>
    <Navbar/>  
    <Slideshow/>
    <About/>
    <Review/>
    <br/><br/>
    <Footer/>
    </div>
    
  )
}

export default Home
