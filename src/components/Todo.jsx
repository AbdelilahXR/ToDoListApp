import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {

  const inputRef = useRef();
  const [todo, settodo] = useState([]);
  const add = ()=>{
     const inputtext = inputRef.current.value.trim(); //trim() delete space   
     console.log(inputtext);

     if (inputtext === "") {
        return null;
     }

     const newtodo = {
        id : Date.now(),
        text: inputtext,
        iscompleted: false,
     }

     settodo((prev)=>[...prev, newtodo]);
     inputRef.current.value  = "";     
  }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        {/*---- title ----------- */}
        <div className="flex items-center mt-7 gap-2 ">
            <img src={todo_icon} alt="" className="w-8" />
            <h1 className='text-3xl font-semibold'>To Do list</h1>
        </div>

         {/*---- title ----------- */}
         <div className='flex items-center my-7 bg-gray-200 rounded-full '>
             <input ref={add}  className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-6 placeholder:text-slate-600' type="text" placeholder='Add your text' />
             <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-12 text-white text-lg font-medium cursor-pointer '>ADD +</button>
         </div>


         {/*---- Todo list ----------- */}
         <div>
          <Todoitems text={"learn coding"}></Todoitems>
          <Todoitems text={"learn spanish"}></Todoitems>
         </div>

    </div>
  )
}

export default Todo
