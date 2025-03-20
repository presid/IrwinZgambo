import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Irwin K. Zgambo</h1>

            <ul className="footer__list">
                <li>

                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>

                     <a href="#business" className="footer__link">Business</a>
                </li>

                <li>

                     <a href="#work" className="footer__link">Work</a>
                </li>

            </ul>

            <div className="footer__social">

            <a href="https://www.facebook.com/share/1AhLSSzpnw/?mibextid=LQQJ4d" className="footer__social-icon" target="_blank">
         <i className="uil uil-facebook"></i>
         </a>
        
         <a href="https://t.me/Irwinkizz " className="footer__social-icon" target="_blank">
         <i className="uil uil-telegram"></i>
         </a>

        {/* <a href="" className="footer__social-icon" target="_blank">
         <i className="uil uil-linkedin"></i>
         </a>*/}

         <a href="https://wa.me/79518962867?text=Hello%20there%2C%20I%20would%20like%20to%20connect%20with%20you!
" className="footer__social-icon" target="_blank">
         <i className="uil uil-whatsapp"></i>
         </a>
            </div>

            <span className="footer__copy">&#169; Irwin Kamujuba Zgambo. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
