// // ContactUs.jsx

// import React from 'react';
// import './ContactUs.css';
// import emailjs from "@emailjs/browser";




// function ContactUs() {
//   return (
    
//     <div className="contact-us-container">
//       <div className="contact-header">
       
//       </div>
//       <form className="contact-form">
//         <div className="form-group">
//           <h1>CONTACT US</h1>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" rows="4" required></textarea>
//           <button type="submit" className="submit-button">Submit</button>
//         </div>
//         <styledContactForm>contact</styledContactForm>
//       </form>
//     </div>
//   );
// }

// export default ContactUs;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import backgroundimage from "./contactus.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esml00g",
        "template_2qto9kp",
        form.current,
        "X0uEapdt-xM_4y_iU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <Background>
        <ContactUsText>Contact Us</ContactUsText>
      </Background>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
          <FormField>
            <label>Name</label>
            <input type="text" name="user_name" />
          </FormField>
          <FormField>
            <label>Email</label>
            <input type="email" name="user_email" />
          </FormField>
          <FormField>
            <label>Message</label>
            <textarea name="message" />
          </FormField>
          <SubmitButton type="submit">Send</SubmitButton>
        </form>
      </FormContainer>
    </StyledContactForm>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundimage});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.2rem;
  background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactUsText = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  color: black;
`;

const FormContainer = styled.div`
background-color: rgba(0, 0, 0, 0.7);

  border-radius: 10px;
  padding: 20px;
  display:flex;
  flex-direction: column; 
  align-items: center; 
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
    color:black;
  }

  input,
  textarea {
    width: 350px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  textarea {
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  
  background-color: #fca253;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8400;
  }
`;
