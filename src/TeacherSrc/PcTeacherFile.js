import React from 'react';
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
    ListSubheader,
    Collapse,
    IconButton
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {FaFolder,FaFolderOpen,FaAngleRight,FaChevronDown,FaPowerOff, FaCog,FaFilePdf} from 'react-icons/fa';

function PcTeacherFile(){
    const [openFolder, setOpenFolder] = React.useState([]);
    const [openMore, setOpenMore] = React.useState([]);
    const anchorRef = React.useRef(null);
    const handleClickMore = idMore => {
        if (openMore !== ""){
            setOpenMore("");
        }
        else{
            setOpenMore(idMore);
        }
    };
    const handleClickCloseMore = () => {
        setOpenMore("");

    };
    
    const handleFolder = key => {
        if (openFolder !== ""){
            setOpenFolder("");
        }
        else{
            setOpenFolder(key);
        }
    };
    return(
        <div>
            <Box style={{marginLeft:"5px"}}>
                <Paper style={{maxHeight:"40rem", overflow:"auto",height:"40rem"}}>
                    <List
                        component="nav"
                        subheader={
                        <ListSubheader component="div" style={{background:"white",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}>
                            1234523(1) A
                        </ListSubheader>
                        }
                    >
                        {Object.entries({
                            A1:['a1.pdf','a2.pdf','a3.pdf'],
                            A2:['b1.pdf','b2.pdf'],
                            A3:['c1.pdf','c2.pdf'],
                            A4:['d1.pdf','d2.pdf','d3.pdf','d4.pdf'],
                            DEMO : ['LinuxCommand.pdf']
                        }).map(([key,value]) => (
                             <div style={{width:"21rem"}}>
                                <ListItem button key={key} id={key} onClick={() => handleFolder(key)}>
                                    <ListItemIcon>{key === openFolder? <FaFolderOpen style={{fontSize:"40px"}}/> : <FaFolder style={{fontSize:"40px"}}/>}</ListItemIcon>
                                        <ListItemText primary={key}/>
                                    </ListItem>
                                    <div style={{}}>
                                        <IconButton id={key} onClick={() => handleClickMore(key)}>
                                            {/* <MoreVertIcon/> */}
                                            {/* <Menu id={key} open={openMore === key} onClose={handleClickCloseMore} anchorEl={anchorRef} keepMounted>
                                                <MenuItem onClick={handleClickCloseMore}>
                                                    {key}
                                                </MenuItem>
                                            </Menu> */}
                                        </IconButton>
                                    </div>
                                    <Collapse in={key === openFolder} timeout="auto" unmountOnExit>
                                        <List style={{paddingLeft:"1rem",}}>
                                            {Object.values(value).map((fileValue) => (
                                                <div>
                                                    <ListItem button key={fileValue}>
                                                        <ListItemIcon><FaFilePdf style={{fontSize:"40px"}}/></ListItemIcon>
                                                            <ListItemText primary={fileValue}/>
                                                    </ListItem>
                                                    <div style={{}}>
                                                        <IconButton id={fileValue} onClick={() => handleClickMore(fileValue)}>
                                                            {/* <MoreVertIcon/>
                                                                <Menu id={fileValue} open={openMore === fileValue} onClose={handleClickCloseMore} anchorEl={anchorRef} keepMounted>
                                                                    <MenuItem onClick={handleClickCloseMore}>
                                                                        {fileValue}
                                                                    </MenuItem>
                                                                </Menu> */}
                                                        </IconButton>
                                                    </div>
                                                </div>  
                                            ))}
                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </List>
                        <div style={{marginLeft:"1rem"}}>
                            <Button aria-label="New Folder">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADQklEQVRoge2Zv28URxzF3xuv4wpinUQkLm4RoBQpLMWIKp0pOIiC3NDQ7M36H7AUgoEFUwTxq7K0N9uglL4isY1oQAoSKUgiR0qVCIuO4wgSXolYsgLsfinwRZu5RWf7zrtY3EfaYt7MfOf7bmZ2Z/eAPn369OnzIcMs0XXdEZI3SI4D2LXJmBeMMX73qW2MAVtwXXdEKfUHyVEAQ1uI+eXo6CiXlpbudZ9eZ5QtkLwBoNRl3PNa61xmIcvAeI9i52KibQ9orWW7B90k/wC4Q/KbWq22bFe2zcB7yC4AX4vIg8nJyU/typ1goEVJRK7b4k4yABFp2587ygCAj21hpxloo2+gaPoGiqZvoGicohMAICR/F5F5pdR9ks3V1dXHw8PDr9fW1oYdxzkoImNJklRIHrY7F2lASNaTJDlrjHn4jjZ/r1/3AFx2Xfeg3aCo0+gjpdTJIAh+7TZQETPws1LqRBAEz3oRLG8DPwEYD4LgVVr0fV81Go2jJCsADgH4BG9XxzMAvwBYjKJosV6vx3bAPJfQo8HBwbHZ2dnnabFarY6TvAbgsw79/xKRqTAMb6XFvG6jopQ6aSVPz/OmSd5G5+QB4ADJhWq1OoPUD5+XgTl7w2qtp0VkZpM5kOS01nqmJeRhQETkXFrwPO8IgMwX/iiKhowxbF0AXmY0+9bzvAqQj4GlMAz/u89PTEwMiMjVLsemiFzzfd/Jw8BCulAqlY5iY2u+E/uazeZX225AKXU/XRaR472KnSRJJes58ALA7l4NEsfxE0saSxeiKBqq1+tZ6xwAYIz53+dNrfW/AD4CAJJjWTNwd4u5ZhLHcdOS9vYw/N42AyJyGsDzjMZbwnGctqdnD2GbgTAMHyqlPic5h7fLqSviON5jSU+7jZniSeb/A9uJ1vomgFPvqrf3RHrN24jI97m/kZFc6Nxqw7Fu5W5gZWVlHsCfPQi1DODH3A2sH4mnAHRz6hWSU8aYV7nvgRZa64sAzm6x+3fGmNNAgV8ljDHnReQSNjcTIiKXy+XymZZQ2Ay08DyvIiJXAOzv0HSZ5FStVptPi4UbAADf951Go3EcwDGSXwAYWa96DOA3AIvlcvkH3/df233fAK6BFV5RDdUMAAAAAElFTkSuQmCC"/>
                                <Typography variant="p">&nbsp;New Folder</Typography>
                            </Button>
                        </div>
                </Paper>
            </Box>
        </div>
    );
}

export default PcTeacherFile;