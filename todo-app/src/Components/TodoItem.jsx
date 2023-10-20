import React from 'react'

const TodoItem = ({todo, onDelete, onUpdate}) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={()=> onUpdate(todo.id)}>Edit</button>
            <button onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default TodoItem