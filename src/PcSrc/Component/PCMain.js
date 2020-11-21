import React,{ useState, useEffect } from 'react'

import background from "../../PcSrc/Img/BackGround.jpg"
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Box, AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import { fade } from '@material-ui/core'

import logo from "../../PcSrc/Img/Portal_Img.png"
import Toolbar from '@material-ui/core/Toolbar';

import { useHistory } from "react-router-dom"


export default function PCMain(props){
    let history = useHistory()
    const styles = {
        divStyle: {
            width:"100%",
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            position:"relative",
            height:"100%",
            top:"0px",
            left:"0px",
            overflow: 'hidden',   
        },
        tabStyle:{
            padding:15,
            fontSize:18,
            color:"#FFFFFF"
        },
        tabPanelPaperStyle:{
            padding:"30px",
            width:"1800px"
        },
    };
    const theme = createMuiTheme({
        palette:{
            primary:{
                main: "#17C0E9"
            },
            secondary:{
                main: "#EE7F1B"
            },

        },
        typography: {
            fontFamily: "Anton"
        }
    });
    const [value,setValue] = useState(0)

    function handleHomeTab(){
        if (history.location.pathname==='/main/home'){
        }else{
            setValue(0)
            history.push('/main/home')
        }

    }
    function handleTableTab(){
        if (history.location.pathname==='/main/table'){
        }else{
            setValue(1)
            history.push('/main/table')
        }
    }
    function handleNotiTab(){
        if (history.location.pathname==='/main/notification'){
        }else{
            setValue(2)
            history.push('/main/notification')
        }
    }
    function handleUserTab(){
        if (history.location.pathname==='/main/user'){
        }else{
            setValue(3)
            history.push('/main/user')
        }
    }
    function handleLogoutTab(){
        props.setState(false)
        history.push("/")
    }
    const [ locationKeys, setLocationKeys ] = useState([])
    function pathToValue(path){
        if (path === "/main/home"){
            return 0
        }
        else if (path === "/main/table"){
            return 1
        }
        else if (path === "/main/notification"){
            return 2
        }
        else if (path === "/main/user"){
            return 3
        }
    }
    useEffect(() => {
        setValue(pathToValue(history.location.pathname))
        history.listen(location => {
        
            if (locationKeys[1] === location.key) {
                if (history.location.pathname === "/main/home"){
                    setValue(0)
                }
                if (history.location.pathname === "/main/table"){
                    setValue(1)
                }
                if (history.location.pathname === "/main/notification"){
                    setValue(2)
                }
                if (history.location.pathname === "/main/user"){
                    setValue(3)
                }

            } else {
                if (history.location.pathname === "/main/home"){
                    setValue(0)
                }
                if (history.location.pathname === "/main/table"){
                    setValue(1)
                }
                if (history.location.pathname === "/main/notification"){
                    setValue(2)
                }
                if (history.location.pathname === "/main/user"){
                    setValue(3)
                }
            }
            
    })
    }, [ locationKeys, ])

    return(
        
        <div style={styles.divStyle}>

            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>
                <AppBar position="static" style={{backgroundColor:fade("#FFFFFF", 0.2)}}>
                    <Toolbar style={{}}>                     
                        <img src={logo} alt="portal Logo" width="30px" />
                            <Tabs  icon={<img src={logo}/> } value={value}  style={{paddingLeft:20,}} right indicatorColor="primary">
                                <Tab label = "Home" style={styles.tabStyle} onClick={handleHomeTab} />
                                <Tab label = "Exam/Table" style={styles.tabStyle} onClick={handleTableTab} />
                                <Tab label = "Notifications" style={styles.tabStyle} onClick={handleNotiTab} />
                                <Tab label = "User" style={styles.tabStyle} onClick ={handleUserTab}/>
                                <Box style={{marginLeft:"1000px"}}>
                                    <Tab label = "Logout" style={styles.tabStyle} onClick={handleLogoutTab} />

                                </Box>
                            </Tabs>
                    </Toolbar>
                </AppBar>

                    

            </ThemeProvider>
        </div>
    );
    
}
