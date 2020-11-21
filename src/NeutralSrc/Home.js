import React from 'react'
import PCHome from '../PcSrc/Component/PCHome'
import MobileHome from '../MobileSrc/Component/MobileHome'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Home(props){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div> 
                {isComputer ? 
                    <PCHome />
                        :
                    <MobileHome />
                }
            </div>
        )
}