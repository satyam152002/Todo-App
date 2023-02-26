// import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Login.css'
function Login(props)
{
    return<>
        <div class="login-form">
            <div className='header'>
                Login
            </div>
            
            <form onSubmit={e=>e.preventDefault()}>
                <div className='username-input'>
                    <span className='icon'>
                        <i className='fas fa-user'></i> 
                    </span>
                    <input type={'text'} placeholder='Username' />
                </div>
                <div className='password-input'>
                    <span className='icon'>
                        <i className='fas fa-lock'></i> 
                    </span>
                    <input type={'password'} placeholder='Password' />
                </div>
                <input type={'submit'}
                    className='btn btn-primary '
                    value='Login'/>
                <hr/>
                <span className='register-text'>Or Create A New Account ?</span>
                <Link to={''} className='btn btn-primary register'>Register</Link>
            </form>
        </div>
    </>
}

export default connect()(Login)