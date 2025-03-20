import React, { useState } from 'react';
import "./work.css"


const Work = () => {

   
        const[toggleState, setToggleState] = useState(0);
    
    
        const toggleTab = (index:any) => {
            setToggleState(index);
        }
  return (
  
    <section className="work section" id="work">
    <h2 className="section__title">Services/ Projects</h2>
    <span className="section__subtitle">My goal is to develop myself in several areas </span>

  <div className="business__container container grid">

      <div className="business__content">
          <div>
              <i className="uil uil-web-grid business__icon"></i>
              <h3 className="business__title">Web <br/> Designer</h3>
          </div>
          <span className="business__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right business_button-icon"></i> </span>
      
          <div className={toggleState === 1 ? "business__modal active-modal" : "business__modal"}>

                  <div className="business__modal-content">
                      <i onClick={() => toggleTab(0)}className="uil uil-times business__modal-close"></i>
              
                      <h3 className="business__modal-title">Web Designer</h3>
                      <p className="business__modal-description">worked on several projects in the previous years!. 
                          using Php for the backend and mysql for database, javascript and html for the frontend

                          </p>

                      <ul className="business__modal-services grid">
                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                      Development of websites 
                                  </p>

                             

                          </li>

                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                    Management of websites 
                                  </p>

                             

                          </li>


                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     SEO Optimization
                                  </p>

                              

                          </li>

                      </ul>
              
      
                
                  </div>
          </div>
      
      </div>

      <div className="business__content">
          <div>
              <i className="uil uil-arrow business__icon"></i>
              <h3 className="business__title">UI/UX <br/> Designer</h3>
          </div>
          <span className="business__button" onClick={()=>toggleTab(2)}>View More  <i className="uil uil-arrow-right business_button-icon"></i> </span>
      
          <div className={toggleState === 2 ? "business__modal active-modal" : "business__modal"}>

                  <div className="business__modal-content">
                      <i onClick={() => toggleTab(0)} className="uil uil-times business__modal-close"></i>
              
                      <h3 className="business__modal-title"> UI/UX Designer</h3>
                      <p className="business__modal-description">Strive to design user friend applications 

                          </p>

                      <ul className="business__modal-services grid">
                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     Making websites easy and convient for all users 
                                  </p>

                             

                          </li>

                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     Coloring, navigation and size of images to be of standard 
                                  </p>

                             

                          </li>


                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     SEO Optimization
                                  </p>

                              

                          </li>

                      </ul>
              
      
                
                  </div>
          </div>
      
      </div>

      <div className="business__content">
          <div>
              <i className="uil uil-edit business__icon"></i>
              <h3 className="business__title">Web <br/> Apps</h3>
          </div>
          <span className="business__button" onClick={()=>toggleTab(1)}>View More  <i className="uil uil-arrow-right business_button-icon"></i> </span>
      
          <div className={toggleState === 3 ? "business__modal active-modal" : "business__modal"}>

                  <div className="business__modal-content">
                      <i onClick={() => toggleTab(0)} className="uil uil-times business__modal-close"></i>
              
                      <h3 className="business__modal-title">Web Apps</h3>
                      <p className="business__modal-description"> 
                          worked on vps, web designing and management                          
                          </p>

                      <ul className="business__modal-services grid">
                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                      I develop website and web apps
                                  </p>

                             

                          </li>

                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     web and VPS management 
                                  </p>

                             

                          </li>


                          <li className="business__modal-service">
                              <i className="uil uil-check-circle business__modal-icon">
                              </i>
                                  <p className="business__modal-info">
                                     SEO Optimization
                                  </p>

                              

                          </li>

                      </ul>
              
      
                
                  </div>
          </div>
      
      </div>
  </div>

{/*-- talking aboout business now  --*/}


</section>

  )
}

export default Work
