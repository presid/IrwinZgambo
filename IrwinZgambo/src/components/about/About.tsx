import React from 'react'
import "./about.css";
import aboutImg from "../../assets/IMG_0017.jpeg";
import CV from "../../assets/Irwin__CV.pdf";
import Info from "./info";


const About = () => {
  return (
    <section className="about section" id="about">

        <h2 className="section__title">About Me </h2>
        <span className="section__subtitle">My qualifications</span>
       
        <div className="about__container container grid">

             <img src={aboutImg} alt="" className="about__img"/>
             <div className="about__data">
                <Info/>

                <p className="about__description">
                    I am an informatics and computer engineering graduate! I did both my masters and 
                    bacherlors degree at Kazan National Research Technological University in Kazan, Russia. In the Faculty of Control and Automation.
                    I worked on Yokogawa automated system while in the University. I have also worked on some fullstack projects.
                </p>

                <a download="" href={CV} className="button button--flex">Download CV
                <i className="uil uil-file-download button_icon"></i>
                </a>

             </div>
        </div>
    </section>
  )
}

export default About
