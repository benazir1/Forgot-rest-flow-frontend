import React, { useState } from 'react'
import "../App.css";
import  axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword] =useState('');
   const navigate = useNavigate();
    const handleSubmit = () =>{
        console.log(email,password);
        axios.post('https://pwd-backend.onrender.com/signup',
        {
            email:email,
            password:password
        })
        .then(res=>{
              alert("created");         
             navigate('/signIn')
        
        }).catch(err =>{
            console.log(err)
        
    });
}
  return (
    <div>
        <h1 className='center'>SIGN UP</h1>
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
       <Link style = {{textAlign:'center',display : 'block',marginTop :'5px'}} to={'/signin'}>SIGN IN</Link>
       
        </div>
       
    </div>
  )
}

export default Signup