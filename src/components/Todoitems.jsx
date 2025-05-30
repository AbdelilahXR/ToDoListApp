import React from 'react';
import tick from "../assets/tick.png";
import not_tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";

const Todoitems = ({text, id, iscomplete, deletetodo, toggle }) => {
  return (
    <div className='flex items-center my-4 gap-2'>
        
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={iscomplete ? tick : not_tick} alt=""  className='w-7'/>
            <p className='text-slave-700 ml-4 text-[17px]' >{text}</p>
   
        </div>

        <img onClick={()=>{deletetodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' /> 
    </div>
  )
}

export default Todoitems
