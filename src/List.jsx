import { useEffect, useState } from "react"

import { MdDeleteForever } from "react-icons/md";

const List = ({data}) => {
    
    let ans=data.map((key,i)=>{
        return(
            <>
            <tr>
                <td>{key.pname}</td>
                <td>{"$"}{key.price}</td>
                 <td><MdDeleteForever  style={{fontSize:"20px",color:"orangered",cursor:"pointer"}} /></td>
            </tr>
            
            </>
        )
    })
   
  return (
   <>
   <div className='show-data'>
        <div className='listItem'> Add Items List..</div>    
      {
        data.length>0?<div className='tble'>
        <table>
          <tr>
              <th>Product name:</th>
              <th>Product Price:</th>
          </tr>
         {ans}
        </table>
        </div>:<div className='tble2'>Data not found..</div>
      }
    </div>
   </>
  )
}

export default List;