// // import React from "react";
// // import { Link } from "react-router-dom";
// // let courseId = 0;
// // const CourseDisplay = (props)=>{
// //     const renderdata = ({listdata})=>{
// //         console.log(listdata)
// //      if(listdata){
// //         if(listdata.length>0){
// //             return listdata.map((course)=>{
// //                 courseId=course.courseId
// //                 console.log('courseId='+courseId)
// //                 return (
// //                     <div className="card-container">  
// //                         <div className="card" key={course.id}>
// //                             <div className="card-body">
// //                                  <b> <h1 className="card-title">{course.courseName}</h1></b>
// //                                     <div className="imagediv">
// //                                          <img src={course.courseImageLink} alt="" />
// //                                     </div>
// //                     <br></br><br></br>
// //                         <h2 key={course.courseId}>
// //                              <Link to = {`/viewCourse/${courseId}`} className="btn btn-success">Start Course</Link>
// //                         </h2>
// //                     </div>
// //                         </div>
// //                             </div>
// //                 )
// //             })
// //         }
// //         else{
// //             return(
// //                 <div>
// //                     <h2>no data1</h2>
// //                 </div>
// //             )
// //         }
// //      }  
// //      else{
// //         return(
// //             <div>
// //                 <h2>No data</h2>
// //             </div>
// //         )
// //      }

        
// //     }
// //     return(
// //         <div>
// //           <header className="App-header">
// //            <h1  className="App-title" >Welcome to the Course Management System</h1></header>
// //             {renderdata(props)}
           
            
// //         </div>
// //     )
// // }

// // export default  CourseDisplay;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Course.css";

// let url = 'https://localhost:44324/api/EnrollCourse';


// const CourseDisplay = ({ listdata }) => {
//   const renderdata = () => {
//     if (listdata && listdata.length > 0) {
//       return listdata.map((course) => (
//         <div className="card-container" key={course.id}>
//           <div className="card">
//             <div className="card-body">
//               <h1 className="card-title">{course.courseName}</h1>
//               <div className="imagediv">
//                 <img src={course.courseImageLink} alt="" />
//                 <div className="overlay">
//           <h2 className="desc">{course.description}</h2>
//           </div>
//               </div>
//               <br />
//               <br />
             
//             </div>
//           </div>
          
//           <Link to={`/viewCourse/${course.enrollmentId}`} className="btn btn-success">
//                   Start Course
//                 </Link>
                 
         
//         </div>
//       ));
//     } else {
//       return (
//         <h2>Loading....</h2>
//       );
//     }
    
    
//   };

  
  

//   return (
//     <div>
      
//       {renderdata()}
//     </div>
//   );
// };

// export default CourseDisplay;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Course.css';


// const Course = () => {
//     const [enroll , setEnroll]= useState([]);
//     const[id, setId] = useState([]);
//     const enrollment = async()=>{
//         try {
//             const{data}=await axios.get("https://localhost:44324/api/FindCourse")
//             setEnroll(data)
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     const side = async()=>{
//         try {
//             const{data}=await axios.get("https://localhost:44324/api/EnrollCourse")
//             setId(data)
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(()=>{
//         enrollment()
        
//     },[])
//     useEffect(()=>{
//         side()
//     },[])
//   return (
//     <div>
//     <div className='text-center'>
//         {enroll?.map((c)=>(
//             <div className="card-container" key={c.id}>
//             <div className="card">
//               <div className="card-body">
//                 <h1 className="card-title">{c.courseName}</h1>
//                 <div className="imagediv">
//                   <img src={c.courseImageLink} alt="" />
//                   <div className="overlay">
//             <h2 className="desc">{c.description}</h2>
//             </div>
//                 </div>
//                 <br />
//                 <br />
                
//               </div>
              
//             </div>
//             <div>
//                 {/* {id.map((d)=>(
//                      <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success">
//                      Start Course
//                    </Link>
//                 ))} */}

              
//             </div>
            
            
//           </div>
//         ))}

          
//     </div>
    

//     <Link to="/enroll">
//         <button className='btn btn-success'>Add course</button>
//         </Link><br></br><br></br>
//         <Link to="/delete">
//                <button className='btn btn-danger'>delete course</button>
//                </Link>  
//     </div>
//   )
// }

// export default Course ;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = () => {
  const [enroll, setEnroll] = useState([]);
  const [id, setId] = useState([]);
  
  const enrollment = async () => {
    try {
      const { data } = await axios.get("https://localhost:44324/api/FindCourse");
      setEnroll(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const side = async () => {
    try {
      const { data } = await axios.get("https://localhost:44324/api/EnrollCourse");
      setId(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    enrollment();
  }, []);

  useEffect(() => {
    side();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/enroll" className="nav-link">Add Course</Link>
              </li>
              <li className="nav-item">
                <Link to="/delete" className="nav-link">Delete Course</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='text-center'>
        {enroll?.map((c) => (
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
                
                <div>
                  
                  {id.map((d) => {
                    if (d.courseId === c.id) {
                      return (
                        <Link to={`/viewCourse/${d.enrollmentId}`} className="btn btn-success" key={d.enrollmentId}>
                          Start Course
                        </Link>
                      );
                    } else {
                      return null; // Render nothing if there's no matching enrollment
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
    </div>
  );
}

export default Course;
