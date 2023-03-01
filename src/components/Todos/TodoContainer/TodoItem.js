import { apiDeleteTodo } from "../../../http/todo.http"
import { connect } from "react-redux"
import{delTodo} from './../../../redux/todo/todo.action'
function TodoItem({todo,delTodo})
{
    return<div className='todo-item alert alert-light my-1'>
        <input type='checkbox'
            className="form-switch"
            // onChange={()=>toggleTodo()}
            value={todo.completed} />
        <span data-date={new Date(todo.dueDate).toLocaleString().split(',')[0]}>{todo.task}</span>
        <i className="fas fa-trash todo-delete-icon" onClick={handleClick}></i>
    </div>

    function handleClick()
    {
        apiDeleteTodo({todoID:todo.todoID})
        .then(res=>{
            delTodo({todoID:todo.todoID})
        })
        .catch(e=>console.log(e))
    }
}
export default connect(null,{delTodo:delTodo})(TodoItem)