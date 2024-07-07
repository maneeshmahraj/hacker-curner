

import React, { useState } from 'react'

const Search = ({data}) => {

const [search,setSearch]=useState('');
     
       const [myData,setMydata]=useState([]) 
   const handleSubmit=()=>{
                 
    const filterData=data.filter(key=>key.pname===search);
    setMydata(filterData);
   }
   let ans=myData.map((key)=>{
    return(
        <>
        <tr>
                <td>{key.pname}</td>
                <td>{"$"}{key.price}</td>
            </tr>
            
        </>
    )
   })
  return (
    <>
    <div className='search'>
    <div className='items-ad'>
        <input type='text' value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
        <div className='items-add'>
        <button onClick={handleSubmit}> Search</button>
    </div>  
    </div>
    <div className='listsearch'>
        <div className='listItem2'> Search Items list..</div>
        {
       myData.length>0?<div className='tble4'>
        <table>
          <tr>
              <th>Product name:</th>
              <th>Product Price:</th>
          </tr>
         {ans}
        </table>
        </div>:<div className='tble3'> not found..</div>
      }
        </div>
    </div>
    </>
  )
}

export default Search