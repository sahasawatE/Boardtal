import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"


export default function Mobile(props) {
    let history = useHistory()
    useEffect(()=>{
        
            history.push("/main/home")
        



    })
    return(
        <div>
           
        </div>
    );
}