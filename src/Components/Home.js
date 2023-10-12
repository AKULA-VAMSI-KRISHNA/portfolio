import React from 'react'
import './Home.css';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
       {/* <div class="headder">
            <h1>AKULA VAMSI KRISHNA</h1>
        </div> */}
        {/* <div class="menubar"> */}
            {/* <BrowserRouter> */}
            {/* <a href="#"class="abc">Home</a>
            <a href="#"class="abc">Personal Details</a>
            <a href="#"class="abc">Educational Details</a>
            <a href="#"class="abc">Projects</a>
            <a href="#"class="abc">Technical Skills</a>
            <a href="#"class="abc">Certifications</a> */}
            {/* <Link to='/'>
            <a href="#"class="abc">Home</a>
            </Link>
            <Link to='/Personal'>
            <a href="#"class="abc">Personal Details</a>
            </Link>
            <Link to='/Educational'>
            <a href="#"class="abc">Educational Details</a>
            </Link>
            <Link to='/Projects'>
            <a href="#"class="abc">Projects</a>
            </Link>
            <Link to='/Skills'>
            <a href="#"class="abc">Technical Skills</a>
            </Link>
            <Link to='/Certificates'>
            <a href="#"class="abc">Certifications</a>
            </Link> */}
            {/* </BrowserRouter> */}
        {/* </div> */}
        <div className="abcd">
        {/* <img className="image" src="./photo.jpg" alt="my image" height="300px" width="300px"></img> */}
        <div>
        {/* <h1 className="head"><u>About Me</u></h1> */}
        <p style={{padding:"5%"}}>Hello, I'm AKULA VAMSI KRISHNA, a passionate MERN Stack developer with a unique blend of expertise in both Electrical and Electronics Engineering, and Computer Science. With a solid foundation in these diverse disciplines, I bring a distinctive perspective to web development and software engineering. My journey began with a dual major in Electrical and Electronics Engineering, which equipped me with a strong understanding of hardware systems, circuitry, and electronics. Complementing this, I pursued a minor degree in Computer Science, fostering my love for coding and software development. <br /> Over the years, I have leveraged this interdisciplinary knowledge to excel in the world of technology. As a MERN Stack developer, I have had the privilege of crafting innovative web solutions and applications, merging my technical acumen with a deep appreciation for user-centered design.</p>
        </div>
    </div>
    {/* <div className="footer">
            <span>EmailID:vamsikrishnaakula2@gmail.com </span> &nbsp;&nbsp; <span>Phone:9391728074</span>&nbsp;&nbsp;<span>LinkedIn:AKULA VAMSI KRISHNA</span>
        </div> */}
    </div>
  )
}

export default Home
