import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Resetpassword = () => {
    const navigate = useNavigate()
    // const [otp, setOtp] = useState('')
     const [password, setPassword] = useState('')
     const{id,token} =useParams();
     const handleSubmit = ()=>{
        console.log( password)
        axios.post(`https://pwd-backend.onrender.com/reset-password/${id}/${token}`,
            {
                
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                  alert('Password Updated.')
                    navigate('/signIn')
                    
                } else {
                    alert('server err ')
                }
            }).catch(err => {
                console.log(err)
            })

    }
  return (
    <div> 
    <h1 className='center'> New Password</h1>
   <div className='outercard'>
    New Password: <input
  style={{ marginBottom: '20px' }}
  onChange={(e)=>{
   setPassword(e.target.value);
}}
   value={password} 
  className='inputs' type="password"></input><br/>

<button 
onClick={handleSubmit}
className='btns'>CHANGE PASSWORD</button>
</div>
</div>
  )
}

export default Resetpassword