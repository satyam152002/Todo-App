import { connect } from 'react-redux';
import TodoItem from './TodoItem'
import './TodoContainer.css'
function TodoContainer(props)
{

    return<>
    <div className='todo-container container mt-3'>
        {props.todos.map((todo,index)=>(
            <TodoItem todo={todo} key={`todo-item-${index}`} toggleTodo={null}/>
        ))}
    </div>
    </>
}

function getFormattedDate(date)
{
    return date.toISOString().split('T')[0]
}



export default connect(state=>({todos:state.todos}))(TodoContainer);