import React, { useState } from 'react';
import {
    Grid,
    Box,
    Fab,
    Tooltip,
    makeStyles,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function PcTeacherAnnounce(){
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [dateError,setDateError]=useState(false)
    const [helperText,setHelperText]=useState("")
    return(
        <div>
            <Grid container xs="12">
                <Box style={{marginTop:"-85px"}}>
                    <Tooltip title="Add Announcement" aria-label="add" onClick={handleClickOpen}>
                        <Fab color="primary" className={classes.fab}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Announcer</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="post"
                                label="Post an Announce"
                                type="text"
                                fullWidth
                            />
                            <form noValidate>
                                        
                                <TextField
                                    error={dateError}
                                    id="datetime-local"
                                    label="dd/mm/yyyy"
                                    type="date"
                                    defaultValue={new Date().toISOString().substring(0, 10)}
                                    helperText={helperText}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                >
                                            
                                </TextField>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Post&nbsp;
                                <TelegramIcon/>
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Grid>
        </div>
    );
}
