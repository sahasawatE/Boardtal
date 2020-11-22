import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import MobileClassCalendarTable from './MobileTableComponent/MobileClassCalendatTable'

export default function MobileTable(){
    return(
        <Grid container xl>
            <Grid item xs={12}>
                <MobileClassCalendarTable/>
            </Grid>
        </Grid>

    )
}