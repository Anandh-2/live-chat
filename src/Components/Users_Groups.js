import React from 'react'
import logo from "../Images/live-chat.png"
import { IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

function Users_Groups() {
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <img 
              alt='Logo'
              src={logo}
              style={{height:"2rem",width:"2rem"}}
            />
            <p className='ug-title'>Online Users</p>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='search' className='search-box'/>
        </div>
        <div className='ug-list'>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
        </div>
    </div>
  )
}

export default Users_Groups