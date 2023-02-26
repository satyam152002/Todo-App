import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './redux/user/user.action'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App(props) {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default connect((state)=>state,{updateUser:updateUser})(App);
