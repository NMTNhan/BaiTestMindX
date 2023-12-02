import React from 'react';
import {Button, Input} from 'antd';



function Form({inputText, setInputText, todos, setTodos, setStatus}) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, 
        completed: false, 
        id: Math.random() * 1000}
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }



  return (
    
    <form >
      <div onChange={statusHandler}>
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      <div/>

    <div style={{display: "flex"}}>
    <Input 
    style={{width: "100%", margin:"1rem", borderWidth: "2px", display:"inline-block", marginRight:"10px"
    }}
    size='large'
    value={inputText}
     onChange={inputTextHandler} 
     type="text" 
     className="todo-input" />

    <Button 
    style={{width: "30%", margin:"1rem", padding:"0rem", display:"inline-block"}}
    size='large'
    onClick={submitTodoHandler} className="todo-button" type="primary">
      <h2>Add</h2>
    </Button>
    </div>

  </div>
  </form>

  
  )
}
export default Form;

