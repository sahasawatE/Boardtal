import React from 'react';
import {
    Grid,
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListSubheader
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function PcTeacherViewAnnounce(){
    const [open, setOpen] = React.useState("");
    const handelClick = key => {
        if (open === setOpen){
            setOpen("");
        }
        else{
            setOpen(key);
        }
    };
    const currentDate = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now());

    return(
        <div>
            <Grid container xs="12">
                <Box style={{marginLeft:"5px",width:"34.4rem"}}>
                    <Paper style={{height:"40rem",maxHeight:"40rem"}}>
                        <div style={{marginLeft:"10rem",paddingTop:"1rem",paddingBottom:"1rem",background:"white",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}>
                            <Typography variant="h5">View Announcement</Typography>
                        </div>
                        <div id="loopByDate">
                            <List
                                component="nav"
                                subheader={
                                <ListSubheader component="div">{currentDate}</ListSubheader>
                                }
                            >
                                <ListItem button id="Demo" onClick={() => handelClick("DEMO")}>
                                    <ListItemText primary="DEMO" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding style={{paddingLeft:"1rem"}}>
                                        <ListItem button>
                                            <Typography variant="p">UpLoad PDF completed !</Typography>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>
                    </Paper>
                </Box>
            </Grid>
        </div>
    );
}

