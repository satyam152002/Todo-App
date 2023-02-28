import { SET_TODO,ADD_TODO,DEL_TODO, UPDATE_TODO}  from './todo.action'

const merge=(prev,next)=>Object.assign({},prev,next);

const todoReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case SET_TODO:
                return [...action.payload];
        case ADD_TODO:
            return [...state,action.payload];
        case DEL_TODO:
            return state.filter(todo=>todo.id!==action.payload.id);
        case UPDATE_TODO:
            state=state.map((todo)=>{
                if(todo.id===action.payload.id){
                todo=merge(todo,action.payload);
                }
                return todo
            })
            return state;
        default:
            return state;
    }

}
 
export default todoReducer