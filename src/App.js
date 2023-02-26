import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './redux/user/user.action'
function App(props) {
  
  return (
    <div className="App">
      <h1>Hello world{JSON.stringify(props)}</h1>
      <button onClick={()=>props.updateUser({login:true})}>Click</button>
    </div>
  );
}
export default connect((state)=>state,{updateUser:updateUser})(App);
