import React from 'react'
import PCUser from './../PcSrc/Component/PCUser'
import MobileUser from './../MobileSrc/Component/MobileUser'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function User(props){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div>
                {isComputer ? 
                    <PCUser loggedUserData={props.loggedUserData} setLoggedUserData={props.setLoggedUserData}/>
                        :
                    <MobileUser loggedUserData={props.loggedUserData} setLoggedUserData={props.setLoggedUserData} />
                }
            </div>
        )
}