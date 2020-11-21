import React, { useState } from 'react'
import Mobile from './Mobile'
import PC from './PC'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Login from "./NeutralSrc/Login"
import Main from "./NeutralSrc/Main"
import Table from "./NeutralSrc/Table"
import Notification from "./NeutralSrc/Notification"
import User from "./NeutralSrc/User"
import Home from "./NeutralSrc/Home"
import Unlogin from "./NeutralSrc/Unlogin"

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
    const isComputer = useMediaQuery("(min-width:600px");
    function changeLoginState(newState){
        setLoginState(newState)
    }
    
        return(
            <div>
                {
                    loginState ?
                    <Router>
                        <Route path="/" exact>
                            {isComputer ? 
                                <PC loginState={loginState}/>
                                :
                                <Mobile loginState={loginState}/>
                            }
                        </Route>
                        <Route path="/main">
                            <Main loginState={loginState} setState={changeLoginState}/>
                        </Route>
                        
                        <Route path="/main/home">
                            <Home />
                        </Route>
                        <Router>
                        <Route path="/login" >
                                    <Login loginState={loginState} setState={changeLoginState}/>
                                </Route>
                        </Router>
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
                        <Route path="/login" >
                            <Login loginState={loginState} setState={changeLoginState}/>
                        </Route>
                        <Route path="/" exact>
                            <Unlogin/>
                        </Route>
                    </Router>
                }
                   
            </div>
        )
}