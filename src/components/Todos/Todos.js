import { useEffect } from "react";
import { connect } from "react-redux";
import { apiLoadTodo } from "../../http/todo.http";
import { setTodo } from "../../redux/todo/todo.action";
import TodoContainer from "./TodoContainer/TodoContainer";
import TodoInput from "./TodoInput/TodoInput";


function Todos(props)
{
    useEffect(()=>{
            apiLoadTodo()
            .then(todos=>{
                props.setTodo(todos)
            })
            .catch(e=>{
                console.log(e)
            })
    },[])
    return<>
        <TodoContainer/>
        <TodoInput />
    </>
}


export default connect(null,{setTodo:setTodo})(Todos)