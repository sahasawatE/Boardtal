import { Avatar, Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core'
import React from 'react'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Logo from '../../PcSrc/Img/Portal_ImgResized.png'

export default function PCNotification(){
    const notificationList= [
                                {notiID:"0",logo:Logo,from:"Boardtal System",message:"This is notifications test No.0"},
                                {notiID:"1",logo:Logo,from:"Boardtal System",message:"This is notifications test No.1"},
                                {notiID:"2",logo:Logo,from:"Boardtal System",message:"This is notifications test No.2"}
                            ]
    const styles = {
        headerOuterPaperStyle:{
            width:"1200px",
            
            
            position:"static",
            marginTop:"20px",
        },
        paperStyle: {
            width:"1200px",
            paddingLeft:"20px",
            paddingRight:"20px",
            paddingTop:"30px",
            paddingBottom:"30px",
            position:"static",
            marginTop:"20px",
        },
      };
    const theme = createMuiTheme({
        palette:{
            primary:{
                main: "#17C0E9"
            },
            secondary:{
                main: "#EE7F1B"
            },

        },
        typography: {
            fontFamily: "Anton"
        }
        
    });
    return(
        <Grid container xl>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <ThemeProvider theme ={theme}>


                <Grid item xs={12}  >
                    <Box fontFamily="Anton" align="center">
                        {/* <Paper elevation={0} style={styles.headerOuterPaperStyle}>
                            <Paper elevation={5} style={styles.headerPaperStyle}>
                                Notifications

                            </Paper>
                        </Paper> */}

                        <Paper elevation={2} style={styles.paperStyle} align="center">
                            <Box style={{marginLeft:100,marginRight:100}}>
                                
                                <List >
                                    
                                    {
                                        notificationList.map((notiID)=>(
                                            <div key = {notiID.notiID}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar src={notiID.logo}/>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={notiID.from}
                                                        secondary={
                                                            <React.Fragment>
                                                                {notiID.message}
                                                            </React.Fragment>
                                                        }
                                                    />
                                            
                                                </ListItem>
                                                <Divider variant="inset" component="li"/>
                                            </div>
                                        ))
                                    }
                                </List>
                            </Box>

                        </Paper>
                    </Box>
                </Grid> 


            </ThemeProvider>
        </Grid>
    )
}