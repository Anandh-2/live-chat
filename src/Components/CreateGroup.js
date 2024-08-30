import { AddBoxRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
function CreateGroup() {
  return (
    <div className='createGroups-container'>
        <input placeholder='Enter Group Name' className='search-box'/>
        <IconButton>
            <DoneOutlineIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroup