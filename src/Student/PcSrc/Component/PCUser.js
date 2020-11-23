import React, { useState } from 'react'
import { Paper,fade, Box, ButtonGroup, Button, Select, Popper, MenuList, MenuItem, Grow, Grid, Avatar, Typography, IconButton, Divider, Link } from '@material-ui/core'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import avatarPic from "../Img/Portal_ImgResized.png"
import { useHistory } from 'react-router-dom'
import PCUserProfile from './PCUserComponent/PCUserProfile'
import PCCourseRegister from './PCUserComponent/PCCourseRegister'


export default function PCUser(){
    let history=useHistory()
    const [page,setpage] = useState(0)
    function changePage(page){
        setpage(page)
    }
    // function handleProfileButton(){
    //     history.push("/login")
    // }
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
    function CheckState(props){
        if (props.page===0){
            return <PCUserProfile page={page} changePage={changePage}/>
        }else if (props.page===1) {
            return <PCCourseRegister page={page} changePage={changePage}/>
        }
    }
    const styles = {
        paperStyle: {
            width:"1250px",
            paddingTop:"1%",
            paddingBottom:"1%",
            position:"static",
            marginTop:"20px",
        },
    };
    const userData={fullName:"Boardtal System",userID:"1234567890"}
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <CheckState page={page}/>
            
           
        </Grid>
    )
}