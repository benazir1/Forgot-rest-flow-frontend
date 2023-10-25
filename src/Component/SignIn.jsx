
import React, { useState } from 'react'
import "../App.css";
import  axios from "axios"
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [email,setEmail]=useState('');
  const [password,setPassword] =useState('');
  const navigate = useNavigate();
 // axios.defaults.withCredentials=true;

  const handleSubmit = (e) =>{
    e.preventDefault();
      console.log(email,password);
      axios.post('https://pwd-backend.onrender.com/signin',
      {
          email:email,
          password:password
      })
      .then(res=>{
          console.log(res.data.email)
          if(res.data.code == 401){
            alert('User not found')
          }
          if(res.data.code == 401){
            alert('password is wrong')
          }
          if (res.data) {
            toast.success('login success');
            navigate('/')
            localStorage.setItem('TOKEN', res.data.token)
            localStorage.setItem('EMAIL', res.data.email)
        }
      }).catch(err =>{
          console.log(err)
      
  });
}
  return (
    <div>
       <h1 className='center'>SIGN IN</h1>
       <div className='outercard'>
       Email: <input
       onChange={(e)=>{
        setEmail(e.target.value);
      }}
      value={email}
      className='inputs' 
      type="text"></input> <br/>
    Password: <input
    onChange={(e)=>{
    setPassword(e.target.value);
  }}
    value={password} 
   className='inputs' type="password"></input><br/>
   <button 
   onClick={handleSubmit}
   className='btns'>submit</button>
    <Link style = {{textAlign:'center',display : 'block',marginTop :'5px',}} to={'/signup'}>SIGN UP</Link>
    <Link style = {{textAlign:'center',display : 'block',marginTop :'15px'}} to={'/forgot-password'}>  Forgot password</Link>
    </div>
   <ToastContainer/>
</div>
  )
}

export default SignIn