
import  React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Pageheader from './headertest'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate'
import "./style/contact.css"
import "./style/contactRespon.css"
const Contact = () => {

  const form = useRef();
const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    emailjs.sendForm('service_k9mf45j', 'template_cxw1zw4', form.current, 'zBK0leOJiy0RItAh2')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          setDone("");
      }, (error) => {
          console.log(error.text);
          
      });
  };


  return (
    <section id='contact' className='contact'>
    <Pageheader

      headerText="contact"
      Icon={<BsInfoCircleFill size={40}/>}
    />

    <div className="contact__content">
       <Animate

   
        play
       duration={1}
       delay={0}
       start={{
        transform: "translateX(-200px)",
       }}
       end = {{
        transform : "translateX(0px)"
       }}
       >
<h3 className='headers__text'>let's talk</h3>
       </Animate >


       <Animate

   
play
duration={1}
delay={0}
start={{
transform: "translateX(200px)",
}}
end = {{
transform : "translateX(0px)"
}}
>
<form className="contact__content__form " ref={form} onSubmit={sendEmail}>
  <div className="contact__content__form__control">
    <div className="nameWrapper">
    <label htmlFor="name" className='nameLabel'>Name</label>
    
      <input type={'text'} 
      required
      className='inputName' name='name' />
      </div>

    <div className="emailWrapper">
    <label htmlFor="email" className='emailLabel'>Email</label>
      <input type={'text'}
       required
        className='inputEmail' name='email' />
    
    </div>
   

    <div className="descriptionWrapper">
    <label htmlFor="description" className='descriptionLabel'>Description </label>
      <textarea type={'text'} 
      required
      rows={8} 
      className='descriptionName' name='description' style={{padding:'20px', marginRight:"40px"}} />
      
    </div>
  
    </div>
  <button style={{color:"white", display:"flex", justifyContent:"center", width:"100%"}}>submit</button>
<span style={{color:"white"}}>{done && "thanks for contact me!"}</span>
</form>
</Animate>
    </div>
    </section>
   )
}

export default Contact
