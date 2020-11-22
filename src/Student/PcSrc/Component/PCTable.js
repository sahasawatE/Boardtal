import React, { useState } from 'react'
import PCClassCalenderTable from './PCTableComponent/PCClassCalendarTable'

import { Paper,fade, Box, ButtonGroup, Button, Select, Popper, MenuList, MenuItem, Grow, Grid } from '@material-ui/core'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PCExamCalendarTable from './PCTableComponent/PCExamCalendarTable'


export default function PCTable(){
    const styles = {
        paperStyle: {
            width:"1200px",
            padding:"1%",

            position:"static",
            marginTop:"20px",
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
    const [open,setOpen] = useState(false)
    const [select,setSelect] = useState(0)
    const anchorRef = React.useRef(null);
    function selectStateToTableName(state){
        if (state===0){
            return "Class schedule"
        }
        else if (state===1){
            return "Exam schedule"
        }
    }
    function handleDropDownButton(){
        setOpen(!open)
    }
    function handleSelectClass(){
        setSelect(0)
        setOpen(false)
    }
    function handleSelectExam(){
        setSelect(1)
        setOpen(false)
    }
    function SelectSchedule(props){
        if (props.schedule===0){
            return <PCClassCalenderTable/>
        }
        else if(props.schedule===1){
            return <PCExamCalendarTable/>
        }
    }
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>


                <Grid item xs={12} align="center">
                    <Box align="center" style={{marginTop:20}}>
                        <Grid container direction="column" alignItems="center" >
                            <Grid item xs={12} align="center">

                                <ButtonGroup variant="contained" color="primary" ref={anchorRef}>
                                    <Button

                                        color="primary"
                                    >
                                        {selectStateToTableName(select)}
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
                                            <Paper style={{width:"160px"}}>
                                                <MenuList id="split-button-menu" >
                                                    
                                                    <MenuItem
                                                        onClick={handleSelectClass}
                                                    >
                                                        Class schedule
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleSelectExam}
                                                    >
                                                        Exam schedule
                                                    </MenuItem>

                                                </MenuList>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Grid>
                        </Grid>
                    </Box>

                    <Paper elevation={5} style={styles.paperStyle}>
                        
                        <SelectSchedule schedule={select}/>
                    </Paper>

                </Grid>

            </ThemeProvider>
        </Grid>

    )
}