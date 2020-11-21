import { Box, Button, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"


export default function Unlogin(){
    let history=useHistory()
    useEffect(()=>{
        history.push("/login")
    })
    return(
        <Grid container xl>
            

           
        </Grid>
        
  
    )
}