import React, { useState } from 'react'
import PCClassCalenderTable from './PCTableComponent/PCClassCalendarTable'
import { Paper,fade, Box, ButtonGroup, Button, Select, Popper, MenuList, MenuItem, Grow, Grid, TextField, Typography, Divider } from '@material-ui/core'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PCExamCalendarTable from './PCTableComponent/PCExamCalendarTable'
import moment from 'moment'

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
    const [currentDate,setCurrentDate] = useState(new Date().toISOString().substring(0, 10))
    const [dateError,setDateError]=useState(false)
    const [helperText,setHelperText]=useState("")

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
            return <PCClassCalenderTable currentDate={currentDate}/>
        }
        else if(props.schedule===1){
            return <PCExamCalendarTable currentDate={currentDate} />
        }
    }

    function handleDatePicker(){
        let date = document.getElementById("datetime-local").value
        let dateCheck = moment(date).isValid()
        if (dateCheck){
            setDateError(false)
            setCurrentDate(document.getElementById("datetime-local").value)
            setHelperText("")
        }
        else{
            setHelperText("Date format invalid")
            setDateError(true)
        }
    }
    function handleTodayPicker(){
        setCurrentDate(new Date().toISOString().substring(0, 10))
    }
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>


                <Grid item xs={12} align="center">

                    <Paper elevation={5} style={styles.paperStyle}>
                        <Box align="center" >
                            <Grid container alignItems="center" >
                                <Grid item xs={12} sm={4} align="left" style={{paddingLeft:"10px"}}>
        
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
                                <Grid item xs={12} sm={4} align="center" style={{paddingRight:"10px"}}>
                                    <Typography variant="h5">
                                        Your Table
                                    </Typography>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12} sm={4} align="right" style={{paddingRight:"10px"}}>

                                    <form noValidate>
                                        
                                        <TextField
                                            error={dateError}
                                            id="datetime-local"
                                            label="dd/mm/yyyy"
                                            type="date"
                                            defaultValue={currentDate}
                                            helperText={helperText}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        >
                                            
                                        </TextField>
                                    </form>
                                    <Button onClick={handleDatePicker}>
                                            Pick Date
                                    </Button>
                                    <Button onClick={handleTodayPicker}>
                                            Today
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                        
                        <SelectSchedule schedule={select}/>
                    </Paper>

                </Grid>

            </ThemeProvider>
        </Grid>

    )
}