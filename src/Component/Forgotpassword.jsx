import  { useState } from 'react'
import  axios from "axios"
import { useNavigate } from 'react-router-dom';
function Forgotpassword() {
    
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(email)
      axios.post('https://pwd-backend.onrender.com/forgot-password',
          {
              email: email,
          })
          .then(res => {
              console.log(res.data)
              if (res.data.code === 200)
               {
                  navigate('/login')
              } else {
                  alert('Email / Server Error.')
              }
          }).catch(err => {
              console.log(err)
          })
  }
  return (
    <div>
        <h1 className='center'> Forgot Password</h1>
         <div className='outercard'>
    Email: <input
    onChange={(e)=>{
        setEmail(e.target.value);
    }}
    value={email}
     className='inputs' 
     type="text"></input> <br/>
   
   <button 
   onClick={handleSubmit}
   className='btns'>SEND MAIL</button>
   </div>
   </div>
  )
 
}

export default Forgotpassword