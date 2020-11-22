import React, { useState } from 'react'
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
    const [loginState,setLoginState] = useState(false)
    const [role,setRole] = useState(-1)
    function changeLoginState(newState){
        setLoginState(newState)
    }
    
    return(
        <div>
            {
                loginState ?
                <Router>
                    <Route path="/" exact>
                        <Redirect to="/main/home" />
                    </Route>
                    <Route path="/main">    
                        {
                            ()=>{
                                if (role===0){
                                    return <Main loginState={loginState} setState={changeLoginState}/>
                                }else if (role===1){
                                    return <div>apple</div>
                                }

                            }
                        }
                    </Route>
                    
                    <Route path="/main/home">
                        <Home />
                    </Route>
                    <Route path="/main/table">
                        <Table/>
                    </Route>
                    <Route path="/main/notification">
                        <Notification/>
                    </Route>
                    <Route path="/main/user" exact>
                        <User/>
                    </Route>
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