import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);
    
    
    const toggleTab = (index:any) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">

          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">Professional Journey  </span>

    
       <div className="qualification__container container">
         <div className="qualification__tabs">
            <div className="qualification__button button--flex" 
                
                >
                <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
            </div>

            <div className="qualification__button  button--flex" 
                
                >
                <i className="uil uil-briefcase-alt qualification__icon"></i> {" "} Experience
            </div>
         </div>

         <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content "}
            >

            <div className="qualification__data">

                        <div></div>
                        <div>
                            <span><i className="uil uil-star star"> </i></span>
                           

                        </div>

                      
                        <div>
                            <h3 className="qualification__title">
                                Dispatch / logistics 
                            </h3>
                            <span className="qualification__subtitle">STI Trucking USA (remote) </span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> 2022 - Present
                        </div>

                        

            </div>
            

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span><i className="uil uil-star star"> </i></span>
                           

                        </div>

                        <div>
                            <h3 className="qualification__title">
                                Intern Web developer - wordpress
                            </h3>
                            <span className="qualification__subtitle">Russia - Kazan </span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> 2021 october - December 2021
                        </div>

                        <div>
                            
                        </div>
                    </div>


                    <div className="qualification__data">

                       <div></div>

                        <div>
                        <span><i className="uil uil-star star"> </i></span>
                            

                        </div>
                      
                        <div>
                            <h3 className="qualification__title">
                                Web development
                            </h3>
                            <span className="qualification__subtitle">Freelancing </span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> 2020 - 2021
                        </div>


                    </div>
            

            
                   <div className="qualification__data">
                       

                        <div>
                            <h3 className="qualification__title">
                                Master's Degree
                            </h3>
                            <span className="qualification__subtitle">Kazan National Research Tecchnological
                                 University - Kazan, Russia. </span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> 2018  - 2020
                        </div>

                        

                        <div>
                        <span><i className="uil uil-medal medal"> </i></span>
                           

                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span><i className="uil uil-star star"> </i></span>
                            

                        </div>
                        <div>
                            <h3 className="qualification__title">
                                Intern Engineer in the Security Operation Center 
                            </h3>
                            <span className="qualification__subtitle">GDC(Fujitsu) Kazan, Russia </span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> June 2019 - August 2019
                        </div>

                       
                    </div>


                    <div className="qualification__data">
                       

                        <div>
                            <h3 className="qualification__title">
                                Bachelor's Degree 
                            </h3>
                            <span className="qualification__subtitle">Kazan National Research Tecchnological
                            University - Kazan, Russia.</span>
                            <div className="qualification_calender"></div>
                            <i className="uil uil-calender-alt"></i> 2013  -  2017
                        </div>


                        <div>
                        <span><i className="uil uil-medal medal"> </i></span>
                            

                        </div>

                    </div>

                  
                   

                  

                  
            </div>

        
         </div>

       </div>
    </section>
  )
}

export default Qualification
