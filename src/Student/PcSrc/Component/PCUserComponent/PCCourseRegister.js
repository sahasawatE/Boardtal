import React, { useEffect, useState } from 'react'
import { Paper,fade, Box, ButtonGroup, Button,List, ListItem, Select, Popper, MenuList, MenuItem, Grow, Grid, Avatar, Typography, IconButton, Divider, Link, CardHeader, Card, ListItemAvatar, ListItemIcon, ListItemText,Checkbox,TextField, InputBase } from '@material-ui/core'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PCUserClass from "./PCUserRegisterComponent/PCUserClass"
import PCUserExam from "./PCUserRegisterComponent/PCUserExam"
import SearchIcon from '@material-ui/icons/Search'
import moment from 'moment'
import { useHistory } from "react-router-dom"
import Axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function PCCourseRegister(props){
    let history = useHistory()
    const [currentDate,setCurrentDate] = useState(new Date().toISOString().substring(0, 10))

    const availableCourse=[
        // {
        //     title: 'CalculusXVII',
        //     courseID:"123456",
        //     startDate: '2020-11-09T08:00', 
        //     endDate: '2020-11-09T10:00',
        //     rRule: 'FREQ=WEEKLY;COUNT=4',
        //     midTermStartDate: '2020-11-09T11:00',
        //     midTermEndDate: '2020-11-09T13:00',
        //     finalStartDate: '2020-11-12T13:00',
        //     finalEndDate: '2020-11-12T16:00'
        // },
        // {
        //     title: 'CalculusX',
        //     courseID:"123457",
        //     startDate: '2020-11-19T08:00', 
        //     endDate: '2020-11-19T10:00',
        //     rRule: 'FREQ=WEEKLY;COUNT=4',
        //     midTermStartDate: '2020-11-19T11:00',
        //     midTermEndDate: '2020-11-19T13:00',
        //     finalStartDate: '2020-11-20T13:00',
        //     finalEndDate: '2020-11-20T16:00'
        // },
        // {
        //     title: 'PhysicsIX',
        //     courseID:"123475",
        //     startDate: '2020-11-10T08:00', 
        //     endDate: '2020-11-10T10:00',
        //     rRule: 'FREQ=WEEKLY;COUNT=4',
        //     midTermStartDate: '2020-11-10T11:00',
        //     midTermEndDate: '2020-11-10T13:00',
        //     finalStartDate: '2020-11-15T13:00',
        //     finalEndDate: '2020-11-15T16:00'
        // }
    ]

    const chosenCourse=[]

    const [classSchedule,setClassSchdule] = useState([])
    const [examSchedule,setExamSchedule] = useState([])

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState((availableCourse));
    const [right, setRight] = React.useState(chosenCourse);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    function not(a, b) {
        return a.filter((value) => b.indexOf(value) === -1);
      }
      
      function intersection(a, b) {
        return a.filter((value) => b.indexOf(value) !== -1);
      }
      
      function union(a, b) {
        return [...a, ...not(b, a)];
      }

    const handleListClick = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    useEffect(()=>{
        // console.log("apple")
        // console.log(right)
        let classDataList=[classSchedule]
        let examDataList=[examSchedule]
        for (const data in right){
            // console.log("Apple")
            // console.log(right[data])

            const classData={
                title:right[data].title,
                startDate:right[data].startDate,
                endDate:right[data].endDate,
                rRule:right[data].rRule
            }
            const midtermExamData={
                title: right[data].title,
                startDate:right[data].midTermStartDate,
                endDate:right[data].midTermEndDate,
            }
            const finalExamData={
                title:right[data].title,
                startDate:right[data].finalStartDate,
                endDate:right[data].finalEndDate,
            }
            console.log("apple")
            console.log(classData)
            console.log(midtermExamData)
            console.log(finalExamData)
            classDataList.push(classData)
            examDataList.push(midtermExamData)
            examDataList.push(finalExamData)
            console.log("Bat")
            console.log(classDataList)
            console.log(examDataList)
        }
        setClassSchdule(classDataList)
        setExamSchedule(examDataList)
    },[right.length])
    useEffect(()=>{
        Axios.get('https://boardtal.herokuapp.com/course/all')
            .then((res)=>{
                return res.data
            })
            .then((data)=>{
                let course = []
                const date_week = ['09','10','11','12','13','14','15']
                const dayOfWeek = ["","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
                for (const dat of data){
                    for (const j of dat['course_sec']){
                        for(const k of j['time']){
                            let day = '2020-11-' + date_week[parseInt(k.slice(0, 1))-1]
                            let start_date = day + 'T' + k.slice(1, 3) + ":" + k.slice(3, 5)
                            let end_date = day +'T'+ k.slice(5, 7) + ":" + k.slice(7,9)
                            let mooc = {
                                title: dat['course_name'],
                                day: dayOfWeek[k.slice(0,1)],
                                secs : j['sec'],
                                courseID: dat['course_id'],
                                startDate: start_date, 
                                endDate: end_date,
                                rRule: 'FREQ=WEEKLY;COUNT=4',
                                midTermStartDate: '2020-11-10T11:00',
                                midTermEndDate: '2020-11-10T13:00',
                                finalStartDate: '2020-11-15T13:00',
                                finalEndDate: '2020-11-15T16:00'
                            }
                            course.push(mooc)
                        }
                    }
                }
                return course
            }).then((course)=>{
                setLeft(course)
                console.log(course)
            })
    },[])
    function handleCheckedRight (){
        setRight(right.concat(leftChecked))
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
        
        
    };


    function handleCheckedLeft(){
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));

    };
    
    const tranferList = (title,items) =>(
        <Card style={{height:"100%"}}>                                        
            <CardHeader
                titleTypographyProps={{variant:'body1' }}
                title={title}
            />
            <Divider />

                
                <TextField 
                    id="search_field" 
                    variant="outlined"
                    style={{width:"100%",}} 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />

            <Divider />
                <List style={{height:"498px",overflow:"auto"}}>
                    {
                        items.map((value)=> (    
                            <ListItem button onClick={handleListClick(value)}>
                                <ListItemIcon>
                                    
                                    <Checkbox
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={value.title}
                                    secondary={
                                        <Box>
                                            <Divider style={{marginBottom:"5px"}}  />
                                            Section : {value.secs}<br/>
                                            Class: {value.day} {value.startDate.substring(11,16)}-{value.endDate.substring(11,16)}<br/>
                                            Mid-term exam: {value.midTermEndDate.substring(0,10)} <br/>
                                            at {value.midTermStartDate.substring(11,16)} - {value.midTermEndDate.substring(11,16)}<br/>
                                            Final exam: {value.midTermEndDate.substring(0,10)} <br/>
                                            at {value.finalStartDate.substring(11,16)} - {value.finalEndDate.substring(11,16)}
                                        </Box>
                                    }
                                />
                            </ListItem>
                        ))
                    }
                </List>
        </Card>
    )


    const [open,setOpen] = useState(false)
    const [select,setSelect] = useState(0)
    const anchorRef = React.useRef(null);
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
    const [dateError,setDateError]=useState(false)
    const [helperText,setHelperText]=useState("")

    
    function handleSubmitCourseButton(){
        // Axios.post()
        history.push("/main/home")
    }

    function selectStateToTableName(state){
        if (state===0){
            return "Class schedule"
        }
        else if (state===1){
            return "Exam schedule"
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
            return <PCUserClass schedule={classSchedule} currentDate={currentDate}/>
        }
        else if(props.schedule===1){
            return <PCUserExam schedule={examSchedule} currentDate={currentDate}/>
        }
    }
   

    function handleBackButton(){
        props.changePage(0)
    }
    const styles = {
        paperStyle: {
            margin:"20px",
            paddingTop:"1%",
            paddingBottom:"1%",
            position:"static",
            marginTop:"20px",
        },
    };
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>
                <Grid container xl >
                    <Grid item xs={12} align="center" >
                        
                        <Paper style = {styles.paperStyle}>
                            <Box align="right">
                                <IconButton onClick={handleBackButton} style ={{marginRight:"1.5%", width:"10px",height:"10px"}}>
                                    <HighlightOffIcon/>
                                </IconButton>
                            </Box>
                            <Grid container xl>
                                <Grid item xs={12} sm={6} >
                                    <Grid container xl>
                                        <Grid item xs={12} sm={4} align="left" style={{paddingLeft:"40px",paddingTop:"20px"}}>
                                            <ButtonGroup variant="contained" color="primary" ref={anchorRef} >
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
                                        <Grid item xs={12} sm={4} align="center" style={{paddingTop:"10px"}}>
                                            <Typography variant="h5">
                                                Calendar
                                            </Typography>
                                            <Divider  style={{marginTop:"5px"}} />
                                        </Grid >
                                        <Grid item xs={12} sm={4} align="right" style={{paddingRight:"20px"}}> 
                                            
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
                                    <SelectSchedule schedule={select}/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Box style={{marginRight:"10px",paddingTop:"10px"}}>

                                        <Typography variant="h5">
                                            Course List
                                        </Typography> 
                                        <Divider  style={{marginTop:"5px",marginBottom:"45px"}} />
                                        
                                        <Grid container >
                                            
                                            <Grid item xs={12} sm={5} style={{}}>
                                                    {tranferList('Available Course',left)}
                                                    
                                            </Grid>
                                            <Grid item xs={12} sm={2} style={{height:"565px"}} >
                                                <Grid container direction="column" alignItems="center" style={{paddingTop:"210px"}}>
                                                    <Button
                                                        variant="outlined"
                                                        size="small"

                                                        onClick={handleCheckedRight}
                                                        disabled={leftChecked.length === 0}
                                                        aria-label="move selected right"
                                                    >
                                                        &gt;
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        size="small"

                                                        onClick={handleCheckedLeft}
                                                        disabled={rightChecked.length === 0}
                                                        aria-label="move selected left"
                                                    >
                                                        &lt;
                                                    </Button>

                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={5}>
                                                    {tranferList('Selected Course',right)}
                                            </Grid>

                                        </Grid>
                                    </Box>
                                    
                                </Grid>
                            </Grid>
                        </Paper>
                        <Button variant="contained" style={{margin:"20px"}} color="secondary" onClick={handleSubmitCourseButton}>
                            {/* <Box fontSize="1rem"> */}
                                Submit your course
                            {/* </Box> */}
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Grid>
    )
}