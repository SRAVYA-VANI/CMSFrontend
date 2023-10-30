// import React from "react";
// import { useParams } from "react-router-dom";

// const ViewCourse1=(props)=>{
   
// let courseId=parseInt(props.enrolldata);
// // alert('courseid = '+props.enrolldata);


//     // const src ="https://www.youtube.com/watch?v=g4EazBlX8Jc";
//     const renderdata = ({enrolldata})=>{
//         console.log(enrolldata)
//      if(enrolldata){
//         if(enrolldata.length>0){
//             return enrolldata.map((course)=>{
//                 return (
                 
   
//      <div>
        

         
//        <iframe src={course.videoLinks} height="700px" width="1550px"></iframe>

//      </div>
//                 )
//             })
//         }
//         else{
//             return(
//                 <div>
//                     <h2>no data1</h2>
//                 </div>
//             )
//         }
//      }  
//      else{
//         return(
//             <div>
//                 <h2>No data</h2>
//             </div>
//         )
//      }

        
//     }
//     return(
//         <div>
//           <header className="App-header">
//            <h1  className="App-title" >Welcome to the Course Management System</h1></header>
//             {renderdata(props)}
           
            
//         </div>
//     )
// }
// export default ViewCourse1;