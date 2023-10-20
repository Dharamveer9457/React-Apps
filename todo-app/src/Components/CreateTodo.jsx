import React from 'react'
import { useState } from 'react'

const CreateTodo = ({onSubmit, initialText}) =>{
    const [text, setText] = useState(initialText||"");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setText(e.target.value)} 
        placeholder='Enter a new todo'/>
        <button type='submit'>Add Todo</button>
    </form>
  );
}

export default CreateTodo