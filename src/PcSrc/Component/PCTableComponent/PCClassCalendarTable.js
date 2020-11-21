import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function PCClassCalendarTable(){

    const schedulerData = [
        { 
            title: 'CalculusIV',
            startDate: '2020-11-09T08:00', 
            endDate: '2020-11-09T10:00',
        },
        { 
            title: 'PhysicsVII',
            startDate: '2020-11-09T13:00', 
            endDate: '2020-11-09T15:00', 
        },
    ];
    return(
        <Paper>
            <Scheduler
                data={schedulerData}
            >
                <ViewState/>
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

