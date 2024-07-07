

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
      const [open,setOpen]=useState(false);
      const [myemail,setMyEmail]=useState("");
      const [mypass,setMypass]=useState("");
       const navigate=useNavigate();
    const handleLogin=()=>{
        setOpen(true);
       }
      const handleClose=()=>{
        setOpen(false)
      }
     
      const handleSubmit=async()=>{
       try {
        let data=await fetch(" https://reqres.in/api/login",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            email:myemail,
            password:mypass
          })
        });
        let mydata=await data.json();
          //console.log(data)
        if(data.ok)
          {
              window.localStorage.setItem("token",mydata.token); 
              
          }      
       } catch (error) {
        console.error("eroor",error)
       }
        setMyEmail("");
        setMypass("")
       
    
        
      }
   useEffect(()=>{
    setOpen(true);
   },[])
   useEffect(()=>{
    const token=window.localStorage.getItem("token");
    if(token)
    {
      navigate("/home")
    }
   },[handleSubmit])
  return (
   <>
    <div className='login-form'>
    {open?  <div className="popup">
        <div class="close-btn" onClick={handleClose}>&times;</div>
        <div className="myform">
            <h2>login</h2>
          <div className="form-element">
            <label for="email">Email</label>
            <input type="email" value={myemail} id="email"  placeholder="Enter email" onChange={(e)=>{setMyEmail(e.target.value)}}/>
          </div>
          <div className="form-element">
            <label for="password">password</label>
            <input type="password" id="password" value={mypass} placeholder="Enter password" onChange={(e)=>{setMypass(e.target.value)}} />
          </div>
          <div className="form-element">
           
            <input type="checkbox" id="remember-me" />
            <label for="password">remember me</label>
          </div>
          <div className="form-element">
           
           <button onClick={handleSubmit}>sign in</button>
          </div>
          
        </div>
      </div>:<div className="center">
      <button id="show-login" onClick={handleLogin}>Login</button>
       </div>}
      
     {!open&&<div className="center">
      <button id="show-login" onClick={handleLogin}>Login</button>
       </div>}
       </div>
   </>
  )
}

export default Login;