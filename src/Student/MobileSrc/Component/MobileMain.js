import React,{useState,useEffect} from 'react';
import { BottomNavigationAction, Badge } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { FaHome, FaTable, FaBell, FaUserCircle } from 'react-icons/fa';
import { useHistory } from "react-router-dom"

export default function MobileMain() {
    let history = useHistory()
    function handleHomeNav(){
        if (history.location.pathname==='/main/home'){
        }else{
            history.push('/main/home')
        }
    }
    function handleTableNav(){
        if (history.location.pathname==='/main/table'){
        }else{
            history.push('/main/table')
        }
    }
    function handleNotiNav(){
        if (history.location.pathname==='/main/notification'){
        }else{
            history.push('/main/notification')
        }
    }
    function handleUserNav(){
        if (history.location.pathname==='/main/user'){
        }else{
            history.push('/main/user')
        }
    }
    return ( 
        <BottomNavigation showLabels>
            <BottomNavigationAction 
                label = "Home"
                value = "home"
                icon = { < FaHome fontSize = "2rem" /> }
                onClick={handleHomeNav}
            /> 
            <BottomNavigationAction 
                label = "Exam Table"
                value = "examtable"
                icon = { < FaTable fontSize = "2rem" /> }
                onClick={handleTableNav}
            /> 
            <BottomNavigationAction 
                label = "Notifications"
                value = "notifucation"
                icon =  { 
                            <Badge
                                variant = "dot"
                                color = "error" >
                                <FaBell fontSize = "2rem" />
                            </Badge>
                        }
                onClick={handleNotiNav}
            />
            <BottomNavigationAction label = "User"
                value = "user"
                icon = { < FaUserCircle fontSize = "2rem" /> }
                onClick={handleUserNav}
            /> 
        </BottomNavigation>
        );
    }

