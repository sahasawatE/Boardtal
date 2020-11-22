import React from 'react';
import { Grid, Box, Paper } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

export default function MobileClassCalendarTable() {

    const currentDate = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(Date.now());
    const schedulerData = [
        { startDate: '2020-11-09T09:45', endDate: '2020-11-09T11:00', title: 'Example 1' },
        { startDate: '2020-11-10T12:00', endDate: '2020-11-10T13:30', title: 'Example 2' },
    ];


    return ( 
        <Grid >
            < Box style = {{marginTop: "5px",width: "26..7rem"}}>
                <Paper style = {{height: "35rem"}}>
                    <Scheduler data = { schedulerData } >
                        <ViewState currentDate = { currentDate }/> 
                        <WeekView 
                            startDayHour = { 7 }
                            endDayHour = { 16 }
                            cellDuration={60}
                        /> 
                        <Appointments />
                    </Scheduler> 
                </Paper> 
            </Box> 
        </Grid>
    );
}

