import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function PCUserExam(props){
    
    return(
        <Paper style={{marginLeft:"1%",marginTop:"1%",marginRight:"1%"}}>
            <Scheduler
                data={props.schedule}
            >
                <ViewState
                    currentDate={props.currentDate}
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