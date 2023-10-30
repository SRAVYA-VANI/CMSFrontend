

import React from "react";
import { Route ,BrowserRouter, Routes} from 'react-router-dom';


import Header from "./Project/Header";
import LandingPage from "./Project/LandingPage";


import LoginForm from "./Project//Logins/Login";
import RegistrationForm from "./Project/Registration/RegistrationForm";

// import StartCourse from "./Project/StartCoourse";
import Course from "./Project/Course";

import ViewCourse from "./Project/ViewCourse";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

import AdminLoginForm from "./Project//Logins/AdminLogin"

import Course1 from "./Project/Course1"
import AddCourseForm from "./AddCourse";
import DeleteCourse from "./DeleteCourse";
function App() {
  
  

  return (

    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
 
    <Route path = "/" element={<LandingPage/>}></Route>
    <Route path = "/login" element={<LoginForm/>}></Route>
    <Route path = "/registration" element={<RegistrationForm/>}></Route>
    <Route path = "/course" element={<Course/>}></Route>
    {/* <Route path ="/ViewCourse" element={<MainData/>}></Route> */}
    {/* <Route path ="/StartCourse/:CourseName" element={<CoursePage/>}></Route> */}
    {/* <Route path ="/ViewCourse/{course.courseId}" element={<StartCourse/>}></Route> */}
    <Route path ="/ViewCourse/:courseId" element={<ViewCourse/>}></Route>
    <Route path ="/Nav" element={<Header/>}></Route>
    <Route path ="/ContactUs" element={<ContactUs/>}></Route>
    <Route path ="/AboutUs" element={<AboutUs/>}></Route>
    <Route path="/" element={<LoginForm />} />
    <Route path="/AdminLogin" element={<AdminLoginForm />}> </Route>
    <Route path="/course1" element={<Course1/>}></Route>
<Route path="/enroll" element={<AddCourseForm/>}></Route>
<Route path="/delete" element={<DeleteCourse/>}></Route>


    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
