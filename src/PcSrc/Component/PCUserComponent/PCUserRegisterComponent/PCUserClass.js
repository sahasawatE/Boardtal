import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function PCUserClass(props){
    
    return(
        <Paper style={{margin:"1%"}}>
            <Scheduler
                data={props.schedule}
                
            >
                <ViewState
                    currentDate={props.currentDate}
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

