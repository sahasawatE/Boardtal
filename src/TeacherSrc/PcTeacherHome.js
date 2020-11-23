import React from 'react';
import propTypes from 'prop-types';
import {
    Grid,
    Paper,
    Box,
    Avatar,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Tab,
    Tabs,
    AppBar,
    Button,
    Menu,
    MenuItem,
} from '@material-ui/core';
import {FaFolder,FaFolderOpen,FaAngleRight,FaChevronDown,FaPowerOff, FaCog,FaFilePdf} from 'react-icons/fa';
import {ViewState} from '@devexpress/dx-react-scheduler';
import {Scheduler,WeekView,Appointments} from '@devexpress/dx-react-scheduler-material-ui';
import PcTeacherFile from './PcTeacherFile';
import PcTeacherAnnounce from './PcTeacherAnnounce';
import LinuxCommand from './pdf/LinuxCommand.pdf'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import { Block } from '@material-ui/icons';


function TabPanel(props){
    const {children,value,index} = props;
    return(
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <div style={{marginLeft:"-82%"}}>
                {value === index && (
                    <Box p={1}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </div>
    );
}
TabPanel.propTypes = {
    children: propTypes.node,
    index: propTypes.any.isRequired,
    value: propTypes.any.isRequired,
}
function a11yProps(index){
    return{
        id: `simple-tab-${index}`,'aria-controls':`simple-tabpanel-${index}`,
    };
}

function PcTeacherHome(){

    const [selected, setSelected] = React.useState(false);

    const currentDate = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now());
    const schedulerData = [
        { startDate: '2020-11-17T09:45', endDate: '2020-11-17T11:00', title: 'Example 1' },
        { startDate: '2020-11-18T12:00', endDate: '2020-11-18T13:30', title: 'Example 2' },
    ];

    const [value,setValue] = React.useState(0);
    const handleTab = (onChange,newValue) => {
        setValue(newValue)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handelClick = (onClick) => {
        setAnchorEl(onClick.currentTarget);
    };
    const handelClickClose = () => {
        setAnchorEl(null);
    };
    
    return(
        <div>
            <Grid container xl>
                <Box style={{width:"90%",marginLeft:"5%"}}>
                    <Paper style={{height:"5rem"}}>
                        <div style={{paddingLeft:"2%",paddingTop:"0.2rem"}}>
                            <Avatar style={{width:"4.5rem",height:'4.5rem'}}>H</Avatar>
                            <div style={{marginTop:"-3.5rem",marginLeft:"6rem"}}>
                                <Typography variant="h4">Hok Sahasawat E.</Typography>
                            </div>
                            <Box>
                                <div style={{marginLeft:"90%",marginTop:"-2.1rem"}}>
                                    <Button onClick={handelClick}>Option&nbsp;<FaChevronDown/></Button>
                                    <Menu
                                        id="Menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handelClickClose}
                                    >
                                        <MenuItem onClick={handelClickClose}><FaCog/>&nbsp;Settings</MenuItem>
                                        <MenuItem onClick={handelClickClose}><FaPowerOff/>&nbsp;LogOut</MenuItem>
                                    </Menu>
                                </div>
                            </Box>
                        </div>
                        <Box style={{marginLeft:"45%",marginTop:"-2.1rem"}}>
                            <AppBar position="static" style={{width:"20rem",background:"None",color:"black",boxShadow:"none"}}>
                                <Tabs value={value} onChange={handleTab} aria-label="simple tabs">
                                    <Tab label="Home" {...a11yProps(0)}/>
                                    <Tab label="Course" {...a11yProps(1)}/>
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <Grid>
                                    <Box
                                        style={{
                                            width: "80rem",
                                        }}
                                    >
                                        <Paper
                                            style={{
                                                height: "40rem"
                                            }}
                                        >
                                            <Scheduler
                                                data={schedulerData}
                                            >
                                                <ViewState
                                                    currentDate={currentDate}
                                                />
                                                    <WeekView
                                                        startDayHour={7}
                                                        endDayHour={16}
                                                    />
                                                <Appointments />
                                            </Scheduler>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Grid container xl>
                                    <Grid item xs={12} sm={3}>

                                        <div style={{marginTop:"1px"}}>
                                            <Box style={{}}>
                                                <Paper style={{height:"40rem"}}>
                                                    <div style={{paddingTop:"1rem",marginLeft:"35%",paddingBottom:"1rem"}}>
                                                        <Typography variant="h5">Course</Typography>
                                                    </div>
                                                    <Box style={{marginLeft:"1rem",marginRight:"1rem"}}>
                                                        <List>
                                                            {['1234523(1) A','2234523(1) B','3234523(2) C'].map((s,index) => (
                                                                <ListItem button key={s}>
                                                                    <ListItemText primary={s}/>
                                                                    <ListItemIcon><FaAngleRight/></ListItemIcon>
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} sm={4} style={{}} align="center"> 


                                            <PcTeacherFile/>
                                            <div>
                                                <PcTeacherAnnounce/>
                                            </div>
                                            <div style={{marginTop:"-65px",marginLeft:"18rem"}}>
                                                <ToggleButton
                                                    value="check"
                                                    selected={selected}
                                                    onChange={() => {
                                                        setSelected(!selected);
                                                    }}
                                                    >
                                                    <Typography variant="p">Show PDf</Typography>
                                                </ToggleButton>
                                            </div>
                              
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={5}>
                                        <div style={{marginTop:"1px"}}>
                                            <div id="pdf">
                                                <Box style={{ marginLeft:"5px"}}>
                                                    <Paper style={{height:"40rem"}}>
                                                        <div id="pdf" style={{width:"100%" ,height:"40rem"}}>
                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                                                                <Viewer fileUrl={LinuxCommand} />
                                                            </Worker>
                                                        </div>
                                                    </Paper>
                                                </Box>
                                            </div>
                                        </div>

                                    </Grid>
                                </Grid>
                            </TabPanel>
                            
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </div>
    );
}

export default PcTeacherHome;