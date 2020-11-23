import React, { useState,useEffect } from 'react'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Login from "./Student/NeutralSrc/Login"
import Main from "./Student/NeutralSrc/Main"
import Table from "./Student/NeutralSrc/Table"
import Notification from "./Student/NeutralSrc/Notification"
import User from "./Student/NeutralSrc/User"
import Home from "./Student/NeutralSrc/Home"
import PcTeacherHome from "./TeacherSrc/PcTeacherHome"


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
    const [loginState,setLoginState] = useState(false)
    const [loggedUserData,setLoggedUserData] = useState({})
    const [role,setRole] = useState("student")
    // const [userData,setUserData] = useState(null)

    function changeLoginState(newState){
        setLoginState(newState)
    }
    function changeLoggedUserData(data){
        setLoggedUserData(data)
    }
    useEffect(()=>{
        console.log(loggedUserData)
    },[loggedUserData])
    return(
        <div>
            {
                loginState ?
                <Router>

                        <Route path="/" exact>
                            <Redirect to="/main/home" />
                        </Route>
                        <Route path="/main">    
                            {role==="student" &&<Main loginState={loginState} setState={changeLoginState}/>}
                        </Route>
                        
                        <Route path="/main/home">
                            {role==="student" && <Home />}
                            {role==="teacher" && <PcTeacherHome/>}
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
                            {role==="student" && <User loggedUserData={loggedUserData} setLoggedUserData={changeLoggedUserData} />}
                            {role==="teacher" && <div>Teacher User</div>}
                        </Route>

                </Router>
                    :
                <Router>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <Route path="/login">
                        <Login loggedUserData={loggedUserData} setLoggedUserData={changeLoggedUserData} setRole={setRole} role={role} loginState={loginState} setState={changeLoginState}/>
                    </Route>
                </Router>
            }          
        </div>
    )
}