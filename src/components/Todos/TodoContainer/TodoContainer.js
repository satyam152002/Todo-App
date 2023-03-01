import { connect } from 'react-redux';
import TodoItem from './TodoItem'
import './TodoContainer.css'
import { useEffect, useState } from 'react';
function TodoContainer(props)
{
    const[todos,setTodos]=useState([])
    const[startDate,setStartDate]=useState(()=>new Date())
    const[endDate,setEndDate]=useState(()=>new Date())

    useEffect(()=>{
        setTodos(props.todos)
    },[props.todos])
    return<>
    <div className='filter-container mt-2 '>
        <div className='filter-input '>
            <input type={'date'} className='col-6'
                value={getFormattedDate(startDate)}
                onChange={e=>handleChange(e,'start')}
                max={getFormattedDate(new Date())} />
            <input type={'date'} className='col-6'
                value={getFormattedDate(endDate)}
                onChange={e=>handleChange(e,'end')}
                max={getFormattedDate(new Date())}/>
        </div>
        <div className='filter-label'>
            <span className='col-6'>startDate</span>
            <span className='col-6'>EndDate</span>
        </div>
    </div>
    <div className='todo-container container mt-3'>
        {todos&&todos.map((todo,index)=>(
            <TodoItem todo={todo} key={`todo-item-${index}`} toggleTodo={null}/>
        ))}
    </div>
    </>
    function handleChange(e,type)
    {
        if(type==='start')
            setStartDate(e.target.valueAsDate)
        else
            setEndDate(e.target.valueAsDate)
        let ntodos=[...todos]
        ntodos=ntodos.filter(t=>{
            let d=t.dueDate.split('T')[0]
            // int s=startDate.toLocaleDateString().split('T')[0]
            if(d>='2023-10-01')
                return true
                return false
        })
        setTodos(ntodos)

    }
}

function getFormattedDate(date)
{
    return date.toISOString().split('T')[0]
}



export default connect(state=>({todos:state.todos}))(TodoContainer);