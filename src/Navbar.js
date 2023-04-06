import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { IconContext } from 'react-icons';





export const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
          <h2 className='head'>SRI CHAITANYA SCHOOLS</h2>
          <li className='btn'>Download App</li>
          <li className='btn'>Admissions</li>
          <li className='btn'>Online Admissions</li>
          <li>Downloads</li>
          <li>News & Events</li>
          <li>FAQS</li>
          <li>Contact</li>
          <li className='btn'>Login</li>
          </ul>
          <div className='navbar'>
            <ul className='sub'>    
            <Link to="/Aboutus"><li>AboutUs</li></Link>
            <Link to ="/PRE-PRIMARY"><li>PRE_PRIMARY</li></Link>
            <Link to = "/PRIMARY"><li>PRIMARY</li></Link>
            <Link to = "/Highschool"><li>HIGH SCHOOL</li></Link>
                <Link to ="/STUDENT LIFE"><li>STUDENT LIFE</li></Link>
                <Link to = "/ACHEIVEMENTS"><li>ACHEIVEMENTS</li></Link>
                <Link to = "/FACILITIES"><li>FACILITIES</li></Link>
                <Link  to ="/UNIFORM"><li>UNIFORMS</li></Link>
                <Link to ="/GALLERY"><li>GALLERY</li></Link>
                <Link to ="/CAREERS"><li>CAREERS</li></Link>
            </ul>
          </div>
          <div className="container">
            <div className="facebook">
         <IconContext.Provider value={{size :30}}><Link to="https://tuitionworld.co.in/">
           <FaFacebook ></FaFacebook>
             </Link></IconContext.Provider>
             </div>
         <div  className="you">
          <IconContext.Provider value={{size : 30}}><Link to="https://www.youtube.com/watch?v=oHmz42qRfho"><FaYoutube/>
          </Link> </IconContext.Provider>
          </div>
         <div className="twitter">
          <IconContext.Provider value={{size :30}}>
          <Link to="https://tuitionworld.co.in/" className="twitter"> <FaTwitter/></Link>
          </IconContext.Provider></div>
         <div className="insta">
          <IconContext.Provider value={{size :30}} > <Link to="https://tuitionworld.co.in/"className="insta" ><FaInstagram/></Link> </IconContext.Provider></div>
         </div>
          </div>
    
    
  )
}
