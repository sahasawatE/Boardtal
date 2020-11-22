import React from 'react'
import PCMain from './../PcSrc/Component/PCMain'
import MobileMain from './../MobileSrc/Component/MobileMain'
import useMediaQuery from "@material-ui/core/useMediaQuery"


export default function Main(props){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div> 
                {isComputer ? 
                    <PCMain loginState={props.loginState} setState={props.setState}/>
                        :
                    <MobileMain loginState={props.loginState} setState={props.setState}/>
                }
            </div>
        )
}