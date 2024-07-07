

import React, { useState } from 'react'
import List from './List';
import Search from './Search';

const Addproduct = () => {
     const [mydata,setMydata]=useState({});
     const [data,setData]=useState([]);
     const handleInput=(e)=>{
        
        let pname=e.target.name;
        let value=e.target.value;      
            setMydata(values=>({...values,[pname]:value})) 
        
     }

    const handleSubmit=()=>{
        // console.log(mydata);
       
        let copyData=[...data];
        copyData.push(mydata);
        
       const fltitems= copyData.filter((val,index)=>{return index ===copyData.findIndex(o=>val.pname===o.pname)});
        // console.log(fltitems);
         setData(fltitems);
       
    }
     let ans=data.map((key)=>{
       
        return(
            <>
            <tr>
                <td>{key.pname}</td>
                <td>{key.price}</td>

            </tr>
            </>
        )
     })
   //  console.log(data);
   
  return (
   <>
   <div className='input-item'>
    <div className='items-ad'>
        <input type='text' name='pname' value={mydata.pname} onChange={handleInput}/>
        <input type='text' name='price' value={mydata.price} onChange={handleInput}  style={{marginLeft:'10px'}}/>
    </div>
    <br/>
    <div className='items-add'>
        <button onClick={handleSubmit}> Add Items</button>
    </div>
     
   </div>
   <div style={{display:"flex"}}>
   <List data={data} />
   <Search data={data}/>
   </div>
   </>
  )
}

export default Addproduct