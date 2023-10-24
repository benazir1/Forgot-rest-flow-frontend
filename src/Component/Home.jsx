import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import "../App.css";
function Home() {
  const navigate = useNavigate();
  const email = localStorage.getItem('EMAIL')
  useEffect(()=>{
    const token = localStorage.getItem('TOKEN');
    if(!token){
      navigate('/signup');
    }

  }, [])
  return (
    <>
    <div className='card'>
    <div>Home</div>
    <div>
    
       <button onClick={()=>{
        localStorage.clear();
        navigate('/signIN');
       }}>Logout</button>
    </div>
    
    </div>
    <div>
    <h1>Welcome to our site</h1>
    </div>
    </>
  )
}

export default Home