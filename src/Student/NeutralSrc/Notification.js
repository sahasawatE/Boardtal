import React from 'react'
import PCNotification from './../PcSrc/Component/PCNotification'
import MobileNotification from './../MobileSrc/Component/MobileNotification'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Main(){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div> 
                {isComputer ? 
                    <PCNotification/>
                        :
                    <MobileNotification/>
                }
            </div>
        )
}