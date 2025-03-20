import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
const Contact = () => {

    
    const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      emailjs
      .sendForm('service_n33cw2g', 'template_ywzv4q2', formRef.current, {
        publicKey: 'JFRTC1WbRLq0X_Gzq',
        })
        formRef.current.reset()
    } else {
      console.error('Form reference is null.');
    }
  };


 


  
  return (
  
    <section className="contact section" id="contact">

          <h2 className="section__title">Get in touch</h2>
          <span className="section__subtitle">Contact Me</span>


            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email:</h3>
                            <span className="contact__card-data">irwinkizz@gmail.com</span>

                            <a href="mailto:irwinkizz@gmail.com" className="contact__button">
                                Contact me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                      
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">For proposals, advice and suggestions contact me</h3>
                    <form  ref={formRef} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name:</label>
                            <input type="text" name="name" className="contact__form-input"
                            placeholder="Write your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email:</label>
                            <input type="email" name="email" className="contact__form-input"
                            placeholder="Write your email"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Subject:</label>
                            <input type="text" name="subject" className="contact__form-input"
                            placeholder="Write the subject"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Details:</label>
                            <textarea  name="details" id=" " cols={30} rows={10} className="contact__form-input"
                            placeholder="Write the details"></textarea>
                        </div>
                        <button type="submit" className="button button--flex" >
                              Send
        
                       </button>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact
