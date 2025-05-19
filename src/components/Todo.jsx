import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {

  const inputRef = useRef();
  const [todolist, settodo] = useState([]);

  const add = ()=>{  
     const inputtext = inputRef.current.value.trim(); //trim() delete space   
     console.log(inputtext);
 
     if (inputtext === "") {  
        return null;
     }

     const newtodo = {
        id : Date.now(),
        text: inputtext,
        iscomplete: false,
     }

     settodo((prev) => [...prev, newtodo]);
     inputRef.current.value = "";   
  }

  const deletetodo = (id)=>{
      settodo((prevtodos)=> {
         return prevtodos.filter((todo)=> todo.id !== id );
      })
  }

  //check and unchecked function
  const toggle = (id)=> {
      settodo((prevtodos)=>{
         return prevtodos.map((todo) => {
            if(todo.id === id){
               return{...todo, iscomplete: !todo.iscomplete}
            }
            return todo;
         })
      })
  }

  useEffect(()=>{
      console.log(todolist)
  },[todolist])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        {/*---- title ----------- */}
        <div className="flex items-center mt-7 gap-2 ">
            <img src={todo_icon} alt="" className="w-8" />
            <h1 className='text-3xl font-semibold'>To Do list</h1>
        </div>

         {/*---- title ----------- */}
         <div className='flex items-center my-7 bg-gray-200 rounded-full '>
             <input ref={inputRef}  className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-6 placeholder:text-slate-600' type="text" placeholder='Add your text' />
             <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-12 text-white text-lg font-medium cursor-pointer '>ADD +</button>
         </div>


         {/*---- Todo list ----------- */}
         <div>
           {todolist.map((item, index) =>  {

            return <Todoitems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} deletetodo={deletetodo} toggle={toggle}/>})
            }
 
         </div>

    </div>
  )
}

export default Todo
