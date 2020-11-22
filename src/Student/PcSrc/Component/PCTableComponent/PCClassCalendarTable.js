import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {scheduleData} from "./../../Data/ScheduleData"

export default function PCClassCalendarTable(props){
    const currentDate = props.currentDate;
    const schedulerData = scheduleData
    return(
        <Paper>
            <Scheduler
                data={schedulerData}
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

