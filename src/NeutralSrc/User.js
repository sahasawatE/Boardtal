import React from 'react'
import PCUser from '../../src/PcSrc/Component/PCUser'
import MobileUser from '../../src/MobileSrc/Component/MobileUser'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function User(){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div>
                {isComputer ? 
                    <PCUser/>
                        :
                    <MobileUser/>
                }
            </div>
        )
}