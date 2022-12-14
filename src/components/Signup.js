import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: ""  }) 
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json() 
      console.log(json);
      if(json.success)
      {
        localStorage.setItem('token', json.authtoken); 
        history.push("/buybook");
        props.showAlert("Successful created account", "success")
      }
      else{
          props.showAlert("invalid credentials", "danger")
      }
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (

    <div>
      <h2 className='my-3'>Create an account to use BookBecho</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3"> 
        <label htmlFor="name" className="form-label my-2">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label my-2">Email address</label>
        <input type="email" className="form-control" id="Email" name='email' onChange={onChange} aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label my-2">Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="cpassword" className="form-label my-2">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
      </div> */}
      <button type="submit" className="btn btn-primary my-2">Submit</button>
    </form>
    </div>
  )
}

export default Signup
