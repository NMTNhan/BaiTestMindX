import React from 'react';
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";

function Todo({text, todos, setTodos, todo}) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

  return (
    <div className='todo'>
        <button onClick={completeHandler} className='complete-btn'>
        <TiTick />
        </button>
        <li 
        className={`todo-item ${todo.completed ? "completed" : "" }`}>
            {text}
        </li>
        <button onClick={deleteHandler} className='trash-btn'>
        <FaTrash />
        </button>
    </div>
  );
}

export default Todo;