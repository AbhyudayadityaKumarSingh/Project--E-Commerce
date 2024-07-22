import React, {useState}from 'react'
import Layout from '../../components/Layout/Layout'
import { BiHandicap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios'

const Login = () => {
   
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
      try{
        const res = await axios.post(`/api/v1/auth/login`, {
           
            email,
            password,
           
        })
        if(res.data.success){
            toast.success(res.data.message) 
            navigate('/')
        }
        else{
            toast.error(res.data.message)
        
        }
      }
        catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout>
        <div className='register'>
            <h1>Login User </h1>

           <form onSubmit={handleSubmit}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" required />
  </div>
   
  
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </Layout>
  )
}

export default Login