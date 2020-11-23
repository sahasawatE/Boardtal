import React, { useContext, useState } from 'react'
import { Paper,fade, Box, ButtonGroup, Button, Select, Popper, MenuList, MenuItem, Grow, Grid, Avatar, Typography, IconButton, Divider, Link } from '@material-ui/core'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import avatarPic from "../../Img/Portal_ImgResized.png"
import { useHistory } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



export default function PCUserProfile(props){
    let history=useHistory()
    const [open,setOpen] = useState(false)
    const preventDefault = (event) => event.preventDefault();
    const anchorRef = React.useRef(null);
    const [select,setSelect] = useState(0)
    function handleDropDownButton(){
        setOpen(!open)
    }
    function handleProfileButton(){
        history.push("/login")
    }
    function handleCourseRegister(){
        props.changePage(1)
    }
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
    const styles = {
        paperStyle: {
            width:"1250px",
            paddingTop:"1%",
            paddingBottom:"1%",
            position:"static",
            marginTop:"20px",
        },
    };
    
    const userData={fullName:"Boardtal System",userID:"1234567890",userDetail: "The best Learning management system (atleast better than !whiteboard)"}
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>
                <Grid item xs={12} align="center">
                    <Paper elevation={2} style={styles.paperStyle} align="left">
                        <Grid container xl>
                            <Grid item xs={12} sm={2} align="center">
                                <Box style={{width:"150px"}}>
                                    <IconButton style={{width:"150px",height:"150px"}} onClick={handleProfileButton} >
                                        <Avatar src ={avatarPic} style={{width:"150px",height:"150px"}}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8} style={{paddingTop:"2.5%",paddingLeft:"20px"}}>
                                <Typography variant = "h3">
                                    Name: {props.loggedUserData["stud_firstname"]}
                                </Typography>
                                <Typography variant = "body1">
                                    Detail: Not available
                                </Typography>
                                <Typography style={{fontSize:"0.75rem"}}>
                                    
                                    <Link href="/login"> Edit profile </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Box style={{width:"1250px",marginTop:"20px" ,}} align="left">
                        <Grid container xl>
                            <Grid xs={12} sm={6} >
                                <Paper elevation={2} style={{padding:"4%",marginRight:"2%",height:"550px"}}>
                                    <Box fontFamily="Anton" style={{fontSize:"1.5rem"}}>
                                        About user
                                        <Divider style={{marginBottom:20}}/>
                                    </Box>
                                    <Typography style={{fontSize:"1rem"}}>
                                        Full name : {props.loggedUserData["stud_firstname"]} {props.loggedUserData["stud_lastname"]}<br/>
                                        User ID : {props.loggedUserData["stud_id"]}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid xs={12} sm={6} style={{}}>
                                <Paper elevation={2} style={{padding:"4%",marginLeft:"2%",height:"550px"}}>

                                    <Box fontFamily="Anton" style={{fontSize:"1.5rem"}}>
                                        Manage
                                        <Divider style={{marginBottom:20}}/>
                                    </Box>
                                    <Typography style={{fontSize:"1rem"}}>
                                    <ButtonGroup variant="contained" color="primary" ref={anchorRef}>
                                    <Button

                                        color="primary"
                                    >
                                        Course management
                                    </Button>
                                    <Button
                                        color="secondary"
                                        size="small"
                                        onClick={handleDropDownButton}
                                    >
                                        <ArrowDropDownIcon />
                                    </Button>
                                </ButtonGroup>
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:5}}>
                                        {({ TransitionProps, placement }) =>(
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}
                                            >
                                                <Paper style={{width:"190px"}}>
                                                    <MenuList id="split-button-menu" >
                                                        
                                                        <MenuItem
                                                            onClick={handleCourseRegister}
                                                        >
                                                            Course Register
                                                        </MenuItem>
                                                        {/* <MenuItem
                                                            onClick={handleSelectExam}
                                                        >
                                                            Exam schedule
                                                        </MenuItem> */}

                                                    </MenuList>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                        {/* <Link onClick={props.changeState(1)} > Register course </Link> */}
                                        
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </ThemeProvider>
        </Grid>
    )
}