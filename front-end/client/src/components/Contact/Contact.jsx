import React from 'react'
import Accordion from './Accordion'
import "./Contact.css"

const Contact = () => {

    const Data =[
        {
            question : 'Can I use the image that I accquire from this service?',
            answer : 'Yes, every image that is created from the AI is free of charge and free to use in the future.'
        },
        {
            question : 'Can I create multiple images and download them 1 by 1?',
            answer : 'No. Every description that you write is for 1 particular image.'
        },
        {
            question : 'When will the next version come up and will it be available for free?',
            answer : 'Yes, the next version is planed to be released in 2026 and will be free as well.'
        },
        {
            question : 'Why do I have to have an account in order to download a created image?',
            answer : 'Accounts are used for sending the image to your email address directly once you decide you want the image.'
        },
        {
            question : 'Can I make videos and include the pictures as thumbnails?',
            answer : 'Yes, every image that is created from the AI is free of charge and free to use in the future.'
        },
        {
            question : 'Can I use the images for selling and monetizing them?',
            answer : 'No, Images are free to use but not to sell and distribute.'
        },
    ]

  return (  
    <div className="contact">
        <form action = "" onSubmit = "">
            <div className="form-word">
                <h2>Contact us !</h2>

                <span>Full Name</span>
                <br/>

                <input
                className='input1'
                type="text"
                name="fullName"
                required
                />
                <br/>

                <span>Phone Number</span>
                <br/>
                <input
                className='input1'
                type="text"
                name="phone"
                required
                />
                <br/>

                <span>Enter Email</span>
                <br/>
                <input
                className='input1'
                type="text"
                name="email"
                required
                />
                <br/>
                <span>Message</span>
                <br/>
                <textarea name="message" required></textarea>
                <br/>
                <button>SUBMIT</button>
            </div>
            <div className="faq">
                <h2>FAQ</h2>
                <Accordion data = {Data}/>
            </div>


        </form>
    </div>
  )
}

export default Contact