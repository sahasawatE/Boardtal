import React from 'react'
import { Box, Grid, Paper, } from '@material-ui/core'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function PCHome(){
    const styles = {
        headerOuterPaperStyle:{
            width:"1200px",
            
            
            position:"static",
            marginTop:"20px",
        },
        paperStyle: {

            paddingLeft:"20px",
            paddingRight:"20px",
            paddingTop:"30px",
            paddingBottom:"30px",
            position:"static",
            margin:"10px",
            marginTop:"20px"

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
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>

                <Grid item xs={12} sm = {2}align="center" > 
                    <Paper style={styles.paperStyle}>
                    <Box fontFamily="Anton">
                        Today Class

                    </Box>
                    </Paper>
                    <Paper style={styles.paperStyle}>
                        <Scheduler
                            // data={schedulerData}
                            >
                            <ViewState
                                currentDate={new Date().toISOString().substring(0, 10)}
                                />
                            <DayView
                                startDayHour={7}
                                endDayHour={17}
                                cellDuration={60}
                                />
                            <Appointments />
                        </Scheduler>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm = {5}align="center" >
                    <Paper style={styles.paperStyle}>
                        <Box fontFamily="Anton">
                            General Anouncement
                        </Box>
                    </Paper>
                </Grid> 
                <Grid item xs={12} sm = {5}align="center" >
                    <Paper style={styles.paperStyle}>
                        <Box fontFamily="Anton">
                            To do today
                        </Box>
                    </Paper>
                </Grid>
            </ThemeProvider>
        </Grid>
    )
}