// import React, { useState } from 'react';


// function DeleteCourse() {
//   const [EnrollmentId, setEnrollmentId] = useState('');
//   const [CourseId, setCourseId] = useState('');
//   const [message, setMessage] = useState('');

//   const handleDeleteCourse = async () => {
//     // Perform the delete operation based on course ID using the find course API
//     try {
//       const response = await fetch(`https://localhost:44324/api/EnrollCourse/${EnrollmentId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setMessage('Course deleted from Enrollment successfully.');
//         // Optionally, clear the input field after successful deletion
//         setEnrollmentId('');
//       } else {
//         setMessage('Course deletion from Enrollment failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred during course deletion from FindCourse.');
//     }
//   };

//   const handleDeleteFindCourse = async () => {
//     // Perform the delete operation based on the find course ID using the find course API
//     try {
//       const response = await fetch(`https://localhost:44324/api/FindCourse/${CourseId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setMessage('Course deleted from FindCourse List successfully.');
//         // Optionally, clear the input field after successful deletion
//         setCourseId('');
//       } else {
//         setMessage('Course deletion from FindCourse list failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred during course deletion from FindCourse.');
//     }
//   };

//   return (
//     <div className='enrolldel'>
//       <h2>Delete Course</h2>
//       <div>
//         <label htmlFor="courseIdToDelete">Enrollment ID :</label>
//         <input
//           type="text"
//           id="courseIdToDelete"
//           value={EnrollmentId}
//           onChange={(e) => setEnrollmentId(e.target.value)}
//         />
//         <button onClick={handleDeleteCourse}>Delete from Enrollment</button>
//       </div>
//       <div className='findel'>
//         <label htmlFor="findCourseIdToDelete">Course ID :</label>
//         <input
//           type="text"
//           id="findCourseIdToDelete"
//           value={CourseId}
//           onChange={(e) => setCourseId(e.target.value)}
//         />
//         <button onClick={handleDeleteFindCourse}>Delete from Course List</button>
//       </div>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default DeleteCourse;

import React, { useState } from 'react';
import './DeleteCourse.css';

function DeleteCourse() {
  const [EnrollmentId, setEnrollmentId] = useState('');
  const [CourseId, setCourseId] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteCourse = async () => {
    // Perform the delete operation based on course ID using the find course API
    try {
      const response = await fetch(`https://localhost:44324/api/EnrollCourse/${EnrollmentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Course deleted from Enrollment successfully.');
        // Optionally, clear the input field after successful deletion
        setEnrollmentId('');
      } else {
        setMessage('Course deletion from Enrollment failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred during course deletion from FindCourse.');
    }
  };

  const handleDeleteFindCourse = async () => {
    // Perform the delete operation based on the find course ID using the find course API
    try {
      const response = await fetch(`https://localhost:44324/api/FindCourse/${CourseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Course deleted from FindCourse List successfully.');
        // Optionally, clear the input field after successful deletion
        setCourseId('');
      } else {
        setMessage('Course deletion from FindCourse list failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred during course deletion from FindCourse.');
    }
  };

  return (
    <div >
      <div className="row">
        <div className="col-md-6">
          
              <h2 className="card-title custom-h2" >Delete Course from Enrollment</h2>
              <div className="form-group">
                <label htmlFor="courseIdToDelete">Enrollment ID:</label>
                <input
                  type="text"
                  id="courseIdToDelete"
                  className="form-control"
                  value={EnrollmentId}
                  onChange={(e) => setEnrollmentId(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={handleDeleteCourse}>
                Delete from Enrollment
              </button>
           
        </div>
        <div className="col-md-6">
         
              <h2 className="card-title custom-h2">Delete Course from FindCourse </h2>
              <div className="form-group">
                <label htmlFor="findCourseIdToDelete">Course ID:</label>
                <input
                  type="text"
                  id="findCourseIdToDelete"
                  className="form-control"
                  value={CourseId}
                  onChange={(e) => setCourseId(e.target.value)}
                />
              </div>
              <button className="btn btn-danger" onClick={handleDeleteFindCourse}>
                Delete from Course List
              </button>
            
        </div>
      </div>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default DeleteCourse;
