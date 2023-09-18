import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const navigate = useNavigate()

   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    let url = "http://localhost:5000/user/signin"

    const signin = ()=>{
      axios.post(url, {email,password})
      .then((response)=>{
        if(response.data.status){
          navigate("/dashboard")
        }
        else{
          console.log("Wrong credentials");
        }
      })
    }
    
  return (
    <>
      <div className='col-5 mx-auto'>
                <h1 className='text-center text-success'>Sign In</h1>


                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>

               
                <div className='mx-auto text-center'>
                    <button className='btn btn-primary w-100' onClick={signin}>SUBMIT</button>
                </div>
            </div>

    </>
  )
}

export default Signin