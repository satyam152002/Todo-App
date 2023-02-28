function TodoItem({todo,toggleTodo})
{
    return<div className='todo-item alert alert-light my-1'>
        <input type='checkbox'
            className="form-switch"
            onChange={()=>toggleTodo()}
            value={todo.completed} />
        <span data-date={new Date(todo.dueDate).toLocaleString().split(',')[0]}>{todo.task}</span>
        <i className="fas fa-trash todo-delete-icon"></i>
    </div>
}

export default TodoItem