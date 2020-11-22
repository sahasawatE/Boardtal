import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function PCExamCalendarTable(){
    const currentDate = '2020-11-08';
    const schedulerData = [
        { 
            title: 'Exam CalculusIV',
            startDate: '2020-11-09T08:00', 
            endDate: '2020-11-09T10:00', 
        },
        { 
            title: 'Exam PhysicsVII',
            startDate: '2020-11-09T13:00', 
            endDate: '2020-11-09T15:00', 
        },
    ];
    return(
        <Paper>
            <Scheduler
                data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <MonthView
                    startDayHour={7}
                    endDayHour={17}
                   
                />
                <Appointments />
            </Scheduler>
        </Paper>

    )
}