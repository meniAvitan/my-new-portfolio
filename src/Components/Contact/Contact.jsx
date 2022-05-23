import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

function Contact() {
                  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
   
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_185ukw8', 'template_en03av6', form.current, '1wSfwJBHf-9Axrq6f')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="contact-form" id='contact'>
        <div className="c-left">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Set in tuch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{ background: "skyblue" }}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text"  name= "name" className='user' placeholder='Name...'/>
                <input type="email"  name= "email" className='user' placeholder='Email...'/>
                <input type="tel"  name= "phone" className='user' placeholder='Phone...'/>
                <textarea name="message" id="" cols="30" rows="10" className='user'  placeholder='Message...'></textarea>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks for contactin me!"}</span>
                <div className="blur c-blur2" style={{ background: "var(--purple)" }}></div>
            </form>
        </div>
    </div>


  )
}

export default Contact