import React from 'react'
import { FaBars } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
    
const navigate=useNavigate();

const logout=()=>{
    window.localStorage.clear();
    navigate("/")
}
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
            
            <FaBars className="fa fa-bars" />
        </label>
        <label className="logo">Task</label>
        <ul>
            
           
            <li><a href='' className='logout' onClick={logout} style={{fontSize:"17px",color:"blue",fontWeight:"bold", textDecoration:"underline"}}>  Logout</a></li>
            
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Home