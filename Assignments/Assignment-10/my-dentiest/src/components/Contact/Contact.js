import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container mt-5 mb-5 p-4 rounded-3'>
        <h2 style={{'color':'#44A3FF'}} className='text-center mb-5 mt-3'>Get In Touch</h2>
        <div className='contact-container'>
            <div className='wrapper-map'>
            <iframe className='rounded-3 map-container' title='my home' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58312.16540332966!2d89.21494898357174!3d24.013062425490297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1650209276830!5m2!1sen!2sbd" width="620" height="480"></iframe>
            </div>
            <div className='wrapper-inputs'>
                <div className='input-container'>
                    <input className='form-control mb-3' type="text" name="" id="" placeholder='Your Name...'/>
                    <input className='form-control mb-3' type="email" name="" id="" placeholder='ex@gmail.com'/>
                    <textarea className='form-control mb-3' rows={9} cols={55}></textarea>
                    <button className='btn btn-primary'>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;