import React from 'react'
import PCLogin from '../../src/PcSrc/Component/PCLogin'
import MobileLogin from '../../src/MobileSrc/Component/MobileLogin'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Login(props){
    const isComputer = useMediaQuery("(min-width:600px");
        return(
            <div>
                {isComputer ? 
                    <PCLogin loginState={props.loginState} setState={props.setState}/>
                        :
                    <MobileLogin loginState={props.loginState} setState={props.setState}/>
                }
            </div>
        )
}