import React from 'react'
import './Facilities.css';
import { IconContext } from 'react-icons';
import { FaUniversity} from "react-icons/fa";
import{FaPhoneAlt} from"react-icons/fa";
import{FaArrowRight}from"react-icons/fa";
import{FaArrowLeft}from"react-icons/fa";
import { Link } from 'react-router-dom';

export const Facilities = () => {
  return (
    <div>
          <img className='facilities' src='facilies.jpg'/>
          <div class="bg">
          <p class="prg">
          WE CONTINUALLY STRIVE TO PROVIDE THE BEST FACILITIES TO OUR<br/> STUDENTS. WITH OUR ROBUST OFFERINGS, WE COVER ALL ASPECTS THAT<br/> CAN HELP MAKE STUDENT'S LIFE COMFORTABLE AND PRODUCTIVE.

     </p><br/>
     </div>
    
         <div className='texttransport'>
          <div className='arrleft'><FaArrowLeft/></div>
            <span>Transport </span>
          <span><a href ="#L">Library</a> </span>
          <span><a href ="#S">Sports</a> </span>
         <span><a href ="#Lab"> Labs </a></span>
         <span> <a href="#H">Hostel</a></span>
          <div className='arright'><FaArrowRight/></div>

 </div>
 
 <p className='paratext'> <h1>TRANSPORT</h1> We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets <br/>comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained <br/>drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students <br/>and take care of seating arrangements.</p>
     <img className='facilitytransport' src="facilitytransport.jpg"></img><br></br>


    <div id='L' ><p className='paratext'><h1>LIBRARY</h1>Reading is to the mind, what exercise is to the body. Our libraries house an expansive collection of books that suit the reading levels of different age groups.

The in-house library also subscribes to leading national dailies and journals. We also have an audio and video collection that can be used to augment classroom learning</p>
<img className='library' src="Library.jpg"></img><br></br>

</div>

<div id='S' ><p className='paratext'><h1>SPORTS</h1>All work and no play makes Jack a dull boy. At all our institutions, we encourage a healthy balance of work and play. Students are encouraged to experience the challenge and reward of sports through diverse programmes at the school level.

Our sports department is managed by qualified and competent instructors who design a sports curriculum that improves mental strength, concentration, physical conditioning and coordination, strategic and tactical planning and of course, teamwork.

We conduct an annual inter-branch sports meet, along with a variety of other activities like athletics, team games, and indoor games.

</p>
<img className='sports' src="sports.jpg"></img><br></br>

</div>
<div id='Lab' ><p className='paratext'><h1>LABS</h1>Our well-equipped labs are a testament to our belief in learning by doing. From practical experiments to other activities, these labs promote an activity-based approach to make learning more stimulating.

</p>
<img className='labs' src="labs.jpg"></img><br></br>

</div>
<div id='H'><p className='paratext'><h1>HOSTEL</h1>Our hostels are equipped with all the amenities necessary to offer students a comfortable and disciplined living and learning environment. From top-notch accommodation to experienced doctors, we prioritise every aspect that aids the kids in their holistic development journey.

</p>
<img className='hostel' src="hostel.jpg"></img><br></br>

</div>

   
     <div className="card">
      <p className="card1">
        <IconContext.Provider value={{size: 80}}>
        <FaUniversity/> 
        </IconContext.Provider>
<br></br>
       <b>Sri Chaitanya School </b><br></br>

        plot No:80, sri sai plaza,<br></br>
        Ayyappa Society Main Road,<br></br>
        Ayyappa Society,<br></br>
        Madhapur,<br></br>
        Hyderabad,<br></br>
        Telangana - 500081,<br></br>
        <FaPhoneAlt/>&nbsp; for Admissions : 040 400 600 - 201/202<br></br>
        <FaPhoneAlt/> &nbsp; Web/App support : 040 71 045 047
        
        </p>
     </div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.759863326159!2d78.426741873607!3d17.423308201772425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974daf3115c7%3A0x9ecb1875e971608d!2sVezeza%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1679295162860!5m2!1sen!2sin" className="map"></iframe>
     <br></br>
     
    
    <footer className="footer">
      <div className="last">
    <a class="terms" href="/terms-conditions">Terms &amp; Conditions</a>
    
                            
    <a class="privarcy" href="/privacy-policy">Privacy Policy</a>
    </div>
    
    <a class="copyright">© Copyright Sri Chaitanya Schools - 2023</a>
    
    </footer>
  
          
     </div>
    

    
    
  )
  }
