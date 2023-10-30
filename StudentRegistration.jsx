import React,{ useState} from "react";

export default function PostData(){
    const[data,setData]=useState({
        "Id": '',
        "Student First Name": '',
        "Student Last Name": '',
    });
    const handleInputChange=event=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        });
    };
   
    const handleSubmit=event=>{
        event.preventDefault();
        console.log('data after submit',data)
        fetch('https://localhost:44348/api/Student',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(Response=>Response.json())
       // console.log(Response.json())})
        .then(data=>{
            console.log('Success:',data);
            setData({
                Id:'',
                StudentFirstName:'',
                StudentLastName:''
            })
         })
         .catch(error=>{
            console.log('Error:',error)
         })
    }

    return(
        <form onSubmit={handleSubmit}>           
             <div className="form-group">
                <label htmlFor="id">Id</label>
                <input type="text" name="Id"
                value={data.Id} className="form-control"
                onChange={handleInputChange}></input>
            </div> 
            <div className="form-group">
                <label htmlFor="studentfirstname">student First Name</label>
                <input type="text" name="studentfirstname"
                value={data.StudentFirstName} className="form-control"
                onChange={handleInputChange}></input>
            </div>
             <div className="form-group">
                <label htmlFor="Student Last Name">student Last Name</label>
                <input type="text" name="Student Last Name"
                value={data.StudentLastName} className="form-control"
                onChange={handleInputChange}></input>
            </div> 

            {/* <div className="form-group">
                <label htmlFor="course">course</label>
                <select name="course" onChange={handleLocationChange}
                className="form-control">
                    <option>css</option>
                    <option>java</option>
                    <option>react</option>
                    <option>python</option>
                </select>
            </div> */}

            {/* <div className="form-group">
                <label htmlFor="location">Select the Location</label>
                <input type="radio" name="location" value="Pune" checked={data.location==='Pune'}
                onChange={handleLocationChange}/>Pune
                <input type="radio" name="location" value="HYD" checked={data.location==='HYD'}
                onChange={handleLocationChange}/>HYD
                <input type="radio" name="location" value="Chennai" checked={data.location==='Chennai'}
                onChange={handleLocationChange}/>Chennai
                <input type="radio" name="location" value="Mumbai" checked={data.location==='Mumbai'}
                onChange={handleLocationChange}/>Mumbai
            </div> */}

            <div className="form-group">
                <button type="submit" className="btn btn-success"> Add Student</button>
            </div>
        </form>
    )
}