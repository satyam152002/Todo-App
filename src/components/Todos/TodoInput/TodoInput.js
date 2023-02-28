import { useState } from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../../../redux/todo/todo.action'
import './TodoInput.css'
import { v4 as uuidv4, v4 } from 'uuid'
import { apiAddTodo } from '../../../http/todo.http'

function TodoInput(props)
{
    const[text,setText]=useState('')
    const[state,setState]=useState('')
    return<>
    <form onClick={handleSubmit} className="todo-input-container">
        <input type={'text'} 
            value={text}
            onFocus={()=>setState('focus')}
            onBlur={()=>setState('blur')}
            onChange={e=>setText(e.target.value)}
            placeholder='Enter Todo'/>
        <button  
            type='submit'
            className='btn btn-outline-primary fas fa-plus-circle'> 
        </button>
    </form>
    </>

    async function handleSubmit(e)
    {
        e.preventDefault()
        if(text.trim().length===0)
            return
        apiAddTodo({task:text,todoID:v4()})
        .then(res=>{
            alert("added successfully")
            props.addTodo({...res})
        })
        .catch(e=>alert("error"))
        setText('')
    }
}

const mapDispatchToProps={
    addTodo:addTodo,
}
export default connect(null,mapDispatchToProps)(TodoInput)