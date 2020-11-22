import React,{ Component,useState } from 'react'
import { Box, Grid, TextField, Paper, fade, Button, Typography, Link } from '@material-ui/core';
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"

export default function MobileLogin() {
    const [inputError,setInputError] = useState(false)
    let history = useHistory()
    function handleLoginButton(){
        if(inputError){
          setInputError(false)
        }
        else{
          setInputError(true)
          history.push("/main/home")
        }
      } 
    
    const theme = createMuiTheme({
        typography: {
            fontFamily: "Prompt"
        }
    });
    return ( 
        <Grid container xl >
            <ThemeProvider theme = { theme } >
                <link href = "https://fonts.googleapis.com/css2?family=Prompt&display=swap"  rel = "stylesheet"/>
                <Grid item xs = { 12 }  align = "center" style = {{ backgroundColor: "#188CFF", padding: "20%", backgroundSize: "cover" }}>
                    <Box style = {{ backgroundColor: "none", height: "100%" } } >
                        <Paper style = {{ padding: "10%", backgroundColor: fade("#ffffff", 0.7) }} >
                            <Box style = {{ fontSize: "25px", fontStyle: "bold", paddingBottom: "10%" } } > Login </Box>
                                <TextField label = "Username"id = "username" style = {{ paddingBottom: "5%", width: "90%" }}/><br></br >
                                <TextField label = "Password" id = "password" style = {{ paddingBottom: "10%", width: "90%" }}/><br></br>
                                <Button variant = "contained" style = {{ marginLeft: "0px", marginTop: "5%" } }onClick = { handleLoginButton } > Login </Button> 
                                <Box style = { { marginTop: "10%" } } >
                                    <Typography>
                                        <Link> Sign - in </Link> 
                                    </Typography>        
                                </Box> 
                        </Paper> 
                    </Box> 
                </Grid> 
            </ThemeProvider> 
        </Grid>
    );
    
}
