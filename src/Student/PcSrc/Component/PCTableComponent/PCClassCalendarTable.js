import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {UserSchedule} from "./../../../../Data/UserData"
import { Button } from '@material-ui/core';

export default function PCClassCalendarTable(props){
    const currentDate = props.currentDate;
    const schedulerData = null
    return(
        <Paper>
            <Scheduler
                // data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <WeekView
                    startDayHour={7}
                    endDayHour={17}
                    cellDuration={60}
                />
                <Appointments />
            </Scheduler>
        </Paper>

    )
}

