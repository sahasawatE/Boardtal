import React, { useState ,createContext} from 'react'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Login from "./Student/NeutralSrc/Login"
import Main from "./Student/NeutralSrc/Main"
import Table from "./Student/NeutralSrc/Table"
import Notification from "./Student/NeutralSrc/Notification"
import User from "./Student/NeutralSrc/User"
import Home from "./Student/NeutralSrc/Home"


import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory,
    Redirect
} from 'react-router-dom';


export default function App(){
    const UserData = createContext(null)
    const [loginState,setLoginState] = useState(true)
    const [role,setRole] = useState("student")
    // const [userData,setUserData] = useState(null)

    function changeLoginState(newState){
        setLoginState(newState)
    }
    
    return(
        <div>
            {
                loginState ?
                <Router>
                    <UserData.Provider value={{fullName:"Boardtal System",userID:"1234567890"}}>

                        <Route path="/" exact>
                            <Redirect to="/main/home" />
                        </Route>
                        <Route path="/main">    
                            <Main loginState={loginState} setState={changeLoginState}/>
                        </Route>
                        
                        <Route path="/main/home">
                            {role==="student" && <Home />}
                            {role==="teacher" && <div>Teacher Home</div>}
                        </Route>
                        <Route path="/main/table">
                            {role==="student" && <Table/>}
                            {role==="teacher" && <div>Teacher Table</div>}
                        </Route>
                        <Route path="/main/notification">
                            
                            {role==="student" && <Notification/>}
                            {role==="teacher" && <div>Teacher Notification</div>}
                        </Route>
                        <Route path="/main/user" exact>
                            {role==="student" && <User/>}
                            {role==="teacher" && <div>Teacher User</div>}
                        </Route>
                    </UserData.Provider>
                </Router>
                    :
                <Router>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <Route path="/login">
                        <Login setRole={setRole} role={role} loginState={loginState} setState={changeLoginState}/>
                    </Route>
                </Router>
            }          
        </div>
    )
}