import React from "react";
import { Link } from "react-router-dom";
import './landingpage.css';

function App() {
  return (
    <div className="Applanding">
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <b>
              <h1>Course Management System</h1>
            </b>
            <p>
              Manage all your courses in one place and provide
              a seamless learning experience to your students.
            </p>
            <Link className="cta-btn" to="/AdminLogin">
              TEACHER Login
            </Link>
            <Link className="cta-btn" to="/login">
              Student Login
            </Link>
           
          </div>
          
        </section>
        <div>
          <Link className="cta-btn1" to="/registration">
              Register
            </Link>
            </div>
      </main>
    </div>
  );
}

export default App;
