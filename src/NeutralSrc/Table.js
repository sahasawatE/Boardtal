import React from 'react'
import PCTable from '../../src/PcSrc/Component/PCTable'
import MobileTable from '../../src/MobileSrc/Component/MobileTable'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Table(){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div>
                {isComputer ? 
                    <PCTable/>
                        :
                    <MobileTable/>
                }
            </div>
        )
}