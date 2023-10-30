// import axios from "axios";
// import React, { Component } from "react";
// import ViewCourse from "./ViewCourse";
// import { useParams } from "react-router-dom";

// const url = "https://localhost:44324/api/EnrollCourse/"
// class StartCourse extends Component{
//       constructor(props){
//       super(props);
//       this.state={ViewData : ""}
//        }
  
// render(){
//   const courseId = this.props.match.params.courseId;
//   console.log('courseId in start course page' + courseId);
//   return(
//       <div>  
//          <ViewCourse ViewData = {this.state.CourseData}/>    
//       </div>
//   )}
  
//   componentDidMount(){
//     const { courseId } = this.props.match.params;
//     axios.get(`${url}${courseId}`)
//     .then((res)=>this.setState({ViewData:res.data}))
//   }
// }
  
// export default  StartCourse;


import axios from "axios";
import React, { Component } from "react";
import ViewCourse from "./ViewCourse";
import { useParams } from "react-router-dom";

const url = "https://localhost:44324/api/EnrollCourse/";

class StartCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: "",
    };
  }

  componentDidMount() {
    const { courseId } = this.props.match.params;
    axios.get(`${url}${courseId}`)
      .then((res) => {
        this.setState({ courseData: res.data });
      });
  }

  render() {
    return (
      <div>
        <ViewCourse courseData={this.state.courseData} />
      </div>
    );
  }
}

export default StartCourse;
