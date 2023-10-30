// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CourseDisplay from "./Course1";

// import './Course.css';



// let url = "https://localhost:44324/api/EnrollCourse"
// export class Course extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             CourseData : ""
//         }  
//     }
// render(){
// return(
 
//     <div>   
        
//         {/* {this.state.CourseData} */}
//         <CourseDisplay  listdata = {this.state.CourseData}/>
//     </div>
// )}
// componentDidMount(){
    
//      fetch(url,{method:'GET'})
//      .then((res)=>res.json())
//     //  .then ((res)=>(localStorage.setItem('videoLink',JSON.stringify(res))))
//      .then ((data)=>{this.setState({CourseData:data})})
//     console.log("CourseData"+this.CourseData)
// }
// }

// export default  Course;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Course.css';


const Course = () => {
    const [enroll , setEnroll]= useState([]);
    const[id, setId] = useState([]);
    const enrollment = async()=>{
        try {
            const{data}=await axios.get("https://localhost:44324/api/FindCourse")
            setEnroll(data)
            
        } catch (error) {
            console.log(error);
        }
    }
    const side = async()=>{
        try {
            const{data}=await axios.get("https://localhost:44324/api/EnrollCourse")
            setId(data)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        enrollment()
        
    },[])
    useEffect(()=>{
        side()
    },[])
  return (
    <div className='text-center'>
        {enroll?.map((c)=>(
            <div className="card-container" key={c.id}>
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">{c.courseName}</h1>
                <div className="imagediv">
                  <img src={c.courseImageLink} alt="" />
                  <div className="overlay">
            <h2 className="desc">{c.description}</h2>
            </div>
                </div>
                <br />
                <br />
                
              </div>
              
            </div>
            <div>
                {/* {id.map((d)=>(
                     <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success">
                     Start Course
                   </Link>
                ))} */}

                {id.map((d) => {
                  if(c.courseId === d.courseId){
                    return(
                      <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success">
                      Start Course
                    </Link>
                    )
                  }
                })}
            </div>
           
          </div>
        ))}
    </div>
  )
}

export default Course ;