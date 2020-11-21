import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"



export default function PC(props) {
    let history = useHistory()
    
    useEffect(()=>{

            history.push("/main/home")

        
    })
    return(
        <div>
            
        </div>
    );
}