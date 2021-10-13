import './contact.scss'
import { useState } from 'react';
import emailjs from "emailjs-com"
import{ init } from 'emailjs-com';
init("user_kbQkycUNHmt6GyjajZ4m3");


export default function Contact() {

const[message, setMessage]= useState(false);

    const sendEmail = (e)=>{
    
    e.preventDefault();

    emailjs.sendForm('service_90cldek', 'template_090sko7', e.target, 'user_kbQkycUNHmt6GyjajZ4m3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    setMessage(true)
}

    return (
        <div className ="contact" id="contact">
         
            <div className="right">
            <h2>Contact Me</h2>


            <form onSubmit ={sendEmail}>
            {/* <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/> */}
        <label>Send me your name and contact info and I will get back you!</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Message Recieved!</span> }
            </form>
            </div>
        </div>
    )
}