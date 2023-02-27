import { Routes,Route } from "react-router-dom";
import { updateUser } from "./redux/user/user.action";
import {connect} from 'react-redux'

function PrivateRoutes(props)
{
    return<>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
    function Home()
    {
        return<>
        <button onClick={()=>props.updateUser({login:false})}>Logout</button>
        </>
    }
}

export default connect(null,{updateUser:updateUser})(PrivateRoutes)