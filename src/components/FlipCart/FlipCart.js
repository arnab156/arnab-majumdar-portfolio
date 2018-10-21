import React from "react";
import './FlipCart.css';
import profileimage from './profilepic.jpg';
import insta from './instagram.png';
import linkedIn from './LinkedIn.png';
import github from './github.png';

export const FlipCart = ({ fluid, children }) =>
<div className="flex-container">

  <div className="flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <h2>About Me</h2>
        <img id="profilePic" src={profileimage} alt = "profileimage"/>
      </div>
      <div className="flip-box-back" >
        <h2 >About Me</h2>
        <p>I am a full stack web developer who is detailed oriented, fast-paced, and creative. In my previous experiences in fashion retail, global sourcing, academia, and in a start-up, I have excelled in problem-solving, multi-tasking, and more importantly, learned valuable professional and life lessons.</p>

       <p>  I am a self-starter and believe in self-learning for continuous development. I am also a natural leader, having managed the careers of many students in the past. I am interested in working in companies that are future-oriented and are global in perspective. </p>
       <p> I am proficient in many languages such as English, Hindi, and Bengali. Career aside, I enjoy philosophies, learning about various cultures, and play some tennis or ping pong. I volunteer my time in various social and environmental justice opportunities and my dream is to create a sanctuary for elephants one day. </p>
      </div>
    </div>
  </div>



  <div className="flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <h2>SKILLS</h2>
        
     
            <ul >
              <li> HTML5/CSS3</li>
              <li> JavaScript</li>
              <li> Bootstrap, Materialize</li>
              <li> JQuery</li>
              <li> Nodejs, Handlebar, Express</li>
              <li> Firebase, MySQL, MongoDB</li>
              <li> React, Sequelizejs</li>
              <li> Trello, Github</li>
              <li> Atomic Design, Scrum, Python</li>
              <li> Adobe Creative Suite </li>
            </ul>
        
      
      </div>
      <div className="flip-box-back" >
        <h2 >Social</h2>
        <a href="https://www.linkedin.com/in/arnab156/" title="Go to LinkedIn"> 
          <img src={linkedIn} alt="LinkedIn Link" className="thumbnail"/></a>  
        
        <a href="https://www.instagram.com/amonticon/" title="Go to instagram" > 
            <img src={insta} alt="Insta Link" className="thumbnail"/></a> 
        
        <a href="https://github.com/arnab156/" title="Go to instagram" > 
          <img src={github} alt="github Link" className="thumbnail"  /></a>
      <br></br><br></br><br></br>
      <p>Gallup Strength: <b> Futuristic,  Ideation,  Command,  Intellection,  Input</b></p>
      </div>
    </div>
  </div>

</div>

  export default FlipCart;
