import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='bodys'>
    <div className="about-us-container">
    <img src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20164.jpg?w=2000'  height='400px' width="400px" />
      <h1>About Us</h1>
      <ul className="about-us-points">
        <li>We are a team of passionate developers who have created a course management system to help students and instructors manage their courses efficiently.</li>
        <li>Our platform provides a user-friendly interface for instructors to create and manage courses, and for students to enroll in and keep track of their courses.</li>
        {/* <li>We believe that education should be accessible to everyone, and we strive to make our platform affordable and easy to use for all.</li> */}
        <li>We are constantly improving and adding new features to our system to ensure that we are providing the best possible experience for our users.</li>
      </ul>
      <Link to="/">
        <button className="back-to-courses-btn">Back to Home</button>
      </Link>
      
    </div>
    </div>
    
  );
};

export default AboutUs;


