import React from "react";


const TodoCard =() =>{
    return (
        <div className="todo-card">
            <p>Learn Redux</p>
            <div>
                <button> complete </button>
                <button>delete</button>
                <button>edit</button>
            </div>

        </div>
    )
}



export default TodoCard;