import React from "react";
import TodoCard from "./TodoCard";

const TodoList =() =>{
    return (
        <div className="todo-list">
            
            <div>
              <TodoCard/>  
              <TodoCard/>  
              <TodoCard/>  
            </div>

        </div>
    )
}



export default TodoList;