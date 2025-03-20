import React, { useState } from 'react';
import "./business.css";

const Business = () => {
    const[toggleState, setToggleState] = useState(0);


    const toggleTab = (index:any) => {
        setToggleState(index);
    }
  return (
    <section className="business section" id="business">
       
     
    {/*-- talking aboout business now  --*/}


    <h2 className="section__title">Business</h2>
          <span className="section__subtitle">Besides being a graduate in informatics and Computer engineering, I hold a strong 
            passion in entrepreneurship </span>
    
        <div className="business__container container grid">

            <div className="business__content">
                <div>
                    <i className="uil uil-zambia-grid business__icon"></i>
                    <h3 className="business__title">Business in<br/> Zambia</h3>
                </div>
                <span className="business__button" onClick={()=>toggleTab(4)}>View More <i className="uil uil-arrow-right business_button-icon"></i> </span>
            
                <div className={toggleState === 4 ? "business__modal active-modal" : "business__modal"}>

                        <div className="business__modal-content">
                            <i onClick={() => toggleTab(0)}className="uil uil-times business__modal-close"></i>
                    
                            <h3 className="business__modal-title">Connecting Businesses between Zambia and other countries</h3>
                            <p className="business__modal-description">
                               
                                Besides working in the development I have interests and aspirations in other businesses in Zambia;<br/>
                                
                                1.ecommerce website - www.zlobalmarket.com
                                1. Transportation -  We have estabilished a company that buys small cars and rents them out to drivers who use them as taxi's for a fee. 
                                Besides earning from this venture it is an empowerment to our local drivers as after a certain stipulated time, ownership is transferred to them.
                      
                                2. Agriculture 
                                3. Real Estate 

                                Our Company is able to help foreign companies interested in Investing in Zambia on how to go about the process and to find local partners for partnership.
                                </p>

                            <ul className="business__modal-services grid">
                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           Transportation business
                                        </p>

                                   

                                </li>

                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           Agriculture bussiness
                                        </p>

                                   

                                </li>


                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           Real estate 
                                        </p>

                                    

                                </li>

                            </ul>
                    
            
                      
                        </div>
                </div>
            
            </div>

            <div className="business__content">
                <div>
                    <i className="uil uil-russia business__icon"></i>
                    <h3 className="business__title">Business in<br/> Russia</h3>
                </div>
                <span className="business__button" onClick={()=>toggleTab(5)}>View More  <i className="uil uil-arrow-right business_button-icon"></i> </span>
            
                <div className={toggleState === 5 ? "business__modal active-modal" : "business__modal"}>

                        <div className="business__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times business__modal-close"></i>
                    
                            <h3 className="business__modal-title"> Bussiness interests in Russia</h3>
                            <p className="business__modal-description"> Having spent over 10 years in Russia, part of it studying and working. I have 

                                developed a very good relationship with companies in Russia. I am able to connect comapnies from other places with Russian companies, some comapnies deal in Agriculture products and fertilizer 
                                

                        
                                </p>

                            <ul className="business__modal-services grid">
                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                            Companies deal in fertilizer
                                        </p>

                                   

                                </li>

                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           companies deal in beauty products 
                                        </p>

                                   

                                </li>


                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           Softwares and computer equipments
                                        </p>

                                    

                                </li>

                            </ul>
                    
            
                      
                        </div>
                </div>
            
            </div>

            <div className="business__content">
                <div>
                    <i className="uil uil-africa business__icon"></i>
                    <h3 className="business__title">Business in<br/> Africa</h3>
                </div>
                <span className="business__button" onClick={()=>toggleTab(1)}>View More  <i className="uil uil-arrow-right business_button-icon"></i> </span>
            
                <div className={toggleState === 1 ? "business__modal active-modal" : "business__modal"}>

                        <div className="business__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times business__modal-close"></i>
                    
                            <h3 className="business__modal-title">Business in Africa</h3>
                            <p className="business__modal-description">Through my study in Russia with several African students, I have been able to create a good working relationship with colleagues in business from several 
                                African countries. I am able to connect businesses with many African countries. 

                                Businesses range from Agriculture, mining, Transportation, clothings and etc.

                               
                                </p>

                            <ul className="business__modal-services grid">
                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                            Mining
                                        </p>

                                   

                                </li>

                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                           Agriculture
                                        </p>

                                   

                                </li>


                                <li className="business__modal-service">
                                    <i className="uil uil-check-circle business__modal-icon">
                                    </i>
                                        <p className="business__modal-info">
                                          Clothings and etc 
                                        </p>

                                    

                                </li>

                            </ul>
                    
            
                      
                        </div>
                </div>
            
            </div>
        </div>


    </section>



    
  )
}

export default Business
