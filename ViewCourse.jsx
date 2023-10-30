

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Schedule() {
//     const [data, setData] = useState([]);
//     const Navigate = useNavigate();

//     useEffect(() => {
//         axios.get('https://localhost:44324/api/EnrollCourse')
//             .then(result => {
//                 setData(result.data)
//             })

//     }, []);

//     // const handleBack=()=>{
//     //     Navigate('/mainpage', { replace: false });
//     // }

    
//     const handleStart=(courseId)=>{
//         axios.get(`https://localhost:44324/api/EnrollCourse/${courseId}`)
//         .then(res=>{
//             localStorage.setItem("videoLinks", JSON.stringify(res.data))
//         });
//         Navigate('/ViewCourse/:courseId', { replace: false });
//     }
//     return(
//     <div>
//         {        
//                    data.map((videoLink,courseId)=>{
//                         return(
//                             <tr key={videoLink}>
//                             <td>{videoLink.courseId}</td>
//                             {/* <td>{item.airline}</td> */}
                            
//                                 <button onClick={()=>handleStart(videoLink.courseId)} className="btn btn-primary">
//                                     start
//                                 </button>
                            
//                         </tr>
//                         )
//                     })}
          

       

//     </div>
//     )

// }


// import React, { Component } from "react";
// let url = 'https://localhost:44324/api/EnrollCourse';

// class CourseDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { enrolldata: [] };
//   }

//   render() {
//     const { enrolldata } = this.state;
//     console.log("enrolldata:", enrolldata);
//     if (enrolldata && enrolldata.length > 0) {
//       return (
//         <div>
//           <h2>{enrolldata[0].courseName}</h2>
//           <iframe src={enrolldata[0].videoLinks} height="700px" width="1550px"></iframe>
//         </div>
//       );
//     } else {
//       return <h2>No data</h2>;
//     }
//   }

//   componentDidMount() {
//     const courseId = this.props.courseId;
//     const storedData = localStorage.getItem(`videoLinks_${courseId}`);
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       this.setState({ enrolldata: parsedData });
//     } else {
//       fetch(`${url}?courseId=${courseId}`, { method: "GET" })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data); 
//           localStorage.setItem(`videoLinks_${courseId}`, JSON.stringify(data))
//           this.setState({ enrolldata: data });
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         })      
//     }
//   }
// }

// export default CourseDisplay;



// import React, { Component } from "react";
// import { Container } from "react-bootstrap";
// import '../ViewCourse.css';
// let url = 'https://localhost:44324/api/EnrollCourse/';

// class CourseDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { enrolldata: [], selectedCourseId: '' };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(courseId) {
//     this.setState({ selectedCourseId: courseId });
//   }

//   render() {
//     const { enrolldata, selectedCourseId } = this.state;
//     console.log("enrolldata:", enrolldata);
//     if (enrolldata && enrolldata.length > 0) {
//       const course = enrolldata.find((c) => c.courseId === selectedCourseId);
//       if (course) {
//         return (
//           <div>
//             <h2>{course.courseName}</h2>
//             <p>{course.courseDescription}</p>
//             <iframe src={course.videoLinks} height="670px" width="1550px"></iframe> 
//             <button onClick={() => this.handleClick('')}>Back to Courses</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             {enrolldata.map((course) => {
//               return (
              
//                 <div key={course.courseId}>
                 
//                   <button type="submit"onClick={() => this.handleClick(course.courseId)}>View Details for course</button>
//                 </div>
//               );
//             })}
           
//             {selectedCourseId && <button type="submit" onClick={() => this.handleClick('') }>Back to Courses</button>}
//           </div>
          
//         );
//       }
//     } else {
//       return <h2>No data</h2>;
//     }
//   }

//   componentDidMount() {
//     const storedData = localStorage.getItem('enrollData');
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       this.setState({ enrolldata: parsedData });
//     } else {
//       fetch(url, { method: "GET" })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data); 
//           localStorage.setItem('enrollData', JSON.stringify(data));
//           this.setState({ enrolldata: data });
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         })
//     }
//   }
// }

// export default CourseDisplay;


// import React, { Component } from "react";
// import { Container } from "react-bootstrap";
// import '../ViewCourse.css';
// let url = 'https://localhost:44324/api/EnrollCourse/';

// class CourseDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       enrolldata: [],
//       selectedCourseId: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(courseId) {
//     this.setState({ selectedCourseId: courseId });
//   }

//   componentDidMount() {
//     fetch(url, { method: "GET" })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({ enrolldata: data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { enrolldata, selectedCourseId } = this.state;
//     console.log("enrolldata:", enrolldata);
//     if (enrolldata && enrolldata.length > 0) {
//       const course = enrolldata.find((c) => c.courseId === selectedCourseId);
//       if (course) {
//         return (
//           <div>
//             <h2>{course.courseName}</h2>
//             <h2>{course.courseDescription}</h2>
//             <iframe src={course.videoLinks} height="670px" width="1550px"></iframe> 
//             <button onClick={() => this.handleClick('')}>Back to Courses</button>
//           </div>
          
//         );
//       } else {
//         return (
//           <div>
//             {enrolldata.map((course) => {
//               return (
              
//                 <div key={course.courseId}>
//                   <button type="submit" onClick={() => this.handleClick(course.courseId)}>View Details for course</button>
//                 </div>
//               );
//             })}
//             {selectedCourseId && <button type="submit" onClick={() => this.handleClick('') }>Back to Courses</button>}
//           </div>
          
          
//         );
        
//       }
//     } else {
//       return <h2>Loading...</h2>
//     }
//   }
// }

// export default CourseDisplay;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewCourse = () => {
  const params = useParams();
  const [course, setCourse] = useState([]);
  const[id,setId] =useState([]);
  const getData = async()=>{
    try {
      const {data}=await axios.get(`https://localhost:44324/api/EnrollCourse/${params.courseId}`)
      setCourse(data)
      
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
    getData()
  },[])
  useEffect(()=>{
    side()
  },[])
  return (
    
    <div className='text-center'>
      
      <iframe src={course.videoLinks} height="670px" width="1550px"></iframe> 
     
          </div>

      
  )
}

export default ViewCourse;

