import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {scheduleData} from "./../../Data/ScheduleData"

export default function PCExamCalendarTable(props){
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
                <MonthView
                    startDayHour={7}
                    endDayHour={17}
                />
                <Appointments />
            </Scheduler>
        </Paper>

    )
}