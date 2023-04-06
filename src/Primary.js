import React from 'react'
import { IconContext } from 'react-icons';
import { FaUniversity} from "react-icons/fa";
import{FaPhoneAlt} from"react-icons/fa";

export const Primary = () => {
  return (
    <div>
      
      <p className='primary'>PRIMARY SCHOOL</p>
       <div class="image"></div>
     <div class="bg">
     <p class="pr">
     OUR PRIMARY EDUCATION CURRICULUM FORMS THE FIRST STAGE OF FORMAL SCHOOLING WHERE CHILDREN ARE TAUGHT THE BASICS OF LITERACY, NUMERACY AND ENVIRONMENTAL STUDIES.

     </p><br/>
     
     </div>
     

     <div className='cab'>

     <div className=" logo">
      <img src="https://e7.pngegg.com/pngimages/391/790/png-clipart-human-brain-forming-light-bulb-human-brain-homo-sapiens-human-head-brain-hand-people.png"
      width="70px" height= "70px"></img>
      <p className='para1'><strong>PHILOSOPHY</strong><br/><br/>
      <p className="space1">
      A refined personality is a result of proper grooming. At Sri Chaitanya, we look to inculcate the best moral values and social etiquette, resulting in children with impeccable character.
      </p></p>
      </div>
      <div className="logo">
     <img src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/0/63c94b7406-curriculum-icon.png"
       width="70px" height= "70px"></img>
       <p className=" para2"><strong>CURRICULUM</strong><br></br>
       <p className="space">
       A skills and activities based approach forms the backbone of our teaching methodology. Emphasis is put on public speaking, interpersonal and communication skills, and team work. Our dedicated faculty members follow a child-centric approach, providing kids ample opportunities to learn and also apply what they have learnt. Heavy emphasis is given to holistic growth, thus personality building forms an integral part of their education design. With this, a strong foundation is laid for students to go on and become global achievers in whichever field they choose.
</p>
</p>

     </div>
     
    <div className="logo">
    <img src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/0/21cf1e2c76-objectives-icon.png"width="70px" height="70px" >
      
    </img>
    <p className="para3"> <strong> OBJECATIVES</strong> <br></br>
    <p className="space">
    
    &#8594;To make learning fun by introducing elements beyond the four walls of the classroom<br></br>
    &#8594;To develop knowledge and skills of a student in stages<br></br>
    &#8594; To address both the physical and cognitive needs of the <br></br>
    &#8594;To give equal attention to the intelligence and emotional quotients of the child<br></br>
    &#8594;To induce the right kind of aptitude for global success<br></br>
    &#8594;To create a focused perception through unique teaching methodologies<br></br>
    </p>
    
   </p>
    <br></br>
    
    
            </div>
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