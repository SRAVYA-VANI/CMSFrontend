// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import './Login.css';

// // const RegistrationForm = () => {
// // //   const [fullname, setFullName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [errors, setErrors] = useState({});
// // //   const Navigate = useNavigate();

// // //   const validateForm = () => {
// // //     let errors = {};
// // //     let isValid = true;
// // //     if (!fullname) {
// // //       errors.fullname = "Please enter your full name";
// // //       isValid = false;
// // //     }
// // //     if (!email) {
// // //       errors.email = "Please enter your email";
// // //       isValid = false;
// // //     }
// // //     if (email.length > 0) {
// // //       if (!/\S+@\S+\.\S+/.test(email)) {
// // //         errors.email = "Please enter a valid email address";
// // //         isValid = false;
// // //       }
// // //     }
// // //     if (!password) {
// // //       errors.password = "Please enter a password";
// // //       isValid = false;
// // //     }
// // //     if (password.length > 0) {
// // //       if (password.length < 6) {
// // //         errors.password = "Password must be at least 6 characters long";
// // //         isValid = false;
// // //       }
// // //     }
// // //     if (!confirmPassword) {
// // //       errors.confirmpassword = "Please confirm your password";
// // //       isValid = false; 
// // //     }
// // //     if (confirmPassword.length > 0) {
// // //       if (password !== confirmPassword) {
// // //         errors.confirmpassword = "Passwords do not match";
// // //         isValid = false;
// // //       }
// // //     }
// // //     setErrors(errors);
// // //     return isValid;
// // //   };

// // //   const[data,setData]=useState({
// // //     "firstName": '',
// // //     "email": '',
// // //     "password": '',
// // //     "confirmPassword":'',
// // // });
// // // const handleInputChange=event=>{
// // //     setData({
// // //         ...data,
// // //         [event.target.name]:event.target.value
// // //     });
// // // };

// // //   const handleSubmit = data => {
// // //     data.preventDefault();
// // //     console.log('data after submit',data)
// // //         fetch('https://localhost:44324/api/Account/signup',{
// // //             method:'POST',
// // //             headers:{
// // //                 'Content-Type':'application/json'
// // //             },
// // //             body:JSON.stringify(data)
// // //         }).then(Response=>Response.json())
// // //         // console.log(Response.json())})
// // //          .then(data=>{
// // //              console.log('Success:',data);
// // //              setData({
// // //                  firstName:'',
// // //                  email:'',
// // //                  password:'',
// // //                  confirmPassword:'',
// // //              })
// // //           })
        
        
// // //     if (validateForm()) {
// // //       console.log(`Name: ${fullname}\nEmail: ${email}\nPassword: ${password}`);
// // //       Navigate("/login", { replace: false });
// // //     } else {
// // //       console.log(`${errors.password}`);
// // //  }
// // // };







// //   return (
// //     <form onSubmit={handleSubmit} className="container" style={{ backgroundImage: "linear-gradient(270deg,white,lightpink,white)" }}>
// //         <h1 className="a">Registration Form</h1>
// //   <div className="form-group">
// //     <label htmlFor="fullName">Name</label>
// //     <input
// //       type="text"
// //       className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
// //       id="fullName"
// //       placeholder="Enter full name"
// //       value={fullname}
// //       onChange={(event) => setFullName(event.target.value)}
// //       required
// //     />
// //     {errors.fullName && (
// //       <div className="invalid-feedback">{errors.fullName}</div>
// //     )}
// //   </div>

// //   <div className="form-group">
// //     <label htmlFor="email">Email address</label>
// //     <input
// //       type="email"
// //       className={`form-control ${errors.email ? "is-invalid" : ""}`}
// //       id="email"
// //       placeholder="Enter email"
// //       value={email}
// //       onChange={(event) => setEmail(event.target.value)}
// //       required
// //     />
// //     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// //   </div>

// //   <div className="form-group">
// //     <label htmlFor="password">Password</label>
// //     <input
// //       type="password"
// //       className={`form-control ${errors.password ? "is-invalid" : ""}`}
// //       id="password"
// //       placeholder="Password"
// //       value={password}
// //       onChange={(event) => setPassword(event.target.value)}
// //       required
// //     />
// //     {errors.password && (
// //       <div className="invalid-feedback">{errors.password}</div>
// //     )}
// //   </div>

// //   <div className="form-group">
// //     <label htmlFor="confirmPassword">Confirm Password</label>
// //     <input
// //       type="password"
// //       className={`form-control ${
// //         errors.confirmPassword ? "is-invalid" : ""
// //       }`}
// //       id="confirmPassword"
// //       placeholder="Confirm Password"
// //       value={confirmPassword}
// //       onChange={(event) => setConfirmPassword(event.target.value)}
// //       required
// //     />
// //     {errors.confirmPassword && (
// //       <div className="invalid-feedback">{errors.confirmPassword}</div>
// //     )}
// //   </div>

// //   <button type="submit" className="btn btn-primary">
// //     Register
// //   </button>
// // </form>

// // )

    
// // }
// // export default RegistrationForm ;


// import React,{ useState} from "react";
// import { Link } from "react-router-dom";

// export default function PostData(){
//     const[data,setData]=useState({
        
//         "email": '',
//         "password":'',
       
//     });
//     const handleInputChange=event=>{
//         setData({
//             ...data,
//             [event.target.name]:event.target.value
//         });
//     };
//     // const handleInputChange=event=>{
//     //     setData({
//     //         ...data,
//     //         location:event.target.value
//     //     });
//     //     console.log(data.location)
//     // }
//     const handleSubmit=event=>{
//         event.preventDefault();
//         console.log('data after submit',data)
//         fetch('https://localhost:44324/api/Account/Login',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(Response=>Response.json())
//        // console.log(Response.json())})
//         .then(data=>{
//             console.log('Success:',data);
//             setData({
               
//                 email:'',
//                 password:'',
               
//             })
//          })
//          .catch(error=>{
//             console.log('Error:',error)
//          })
//     }

//     return(
//         <form onSubmit={handleSubmit}>           
              
           
            
//              <div className="form-group">
//                 <label htmlFor="email">email</label>
//                 <input type="text" name="email"
//                 value={data.email} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 

//             <div className="form-group">
//                 <label htmlFor="password">  password</label>
//                 <input type="text" name="password"
//                 value={data.password} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div> 


           

//             <div className="form-group">
//                 {/* <button type="submit" className="btn btn-success"> Add Student</button> */}
//                 <Link to={"/course"} className="btn btn-success">Add Student</Link>
//             </div>
//         </form>
//     )
// }

// import React, { useState } from 'react';
// import axios from 'axios';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:44324/api/Account/Login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       // Redirect to the dashboard or another protected page
//     } catch (error) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       <button type="submit">Log in</button>
//       {error && <p>{error}</p>}

      
//     </form>
//   );
// }
// export default Login;

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './Login.css';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://localhost:44324/api/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the login is successful, set loggedIn to true
          setLoggedIn(true);
        } else {
          // If the login fails, display an error message
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
  };

  return (
    <div className='main-form'>
      <div className='login-container'>
        {loggedIn ? (
          <Navigate to="/course" />
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <h2 className='custom-h2'><marquee>WELCOME BACK !</marquee></h2>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            
           
            {error && <div>{error}</div>}
            <div className={styles.myComponent}>
            <button type="submit">LOGIN</button>
            </div>
            
            <Link to="/registration" className='newuser'>New User ?</Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
