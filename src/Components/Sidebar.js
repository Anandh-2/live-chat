import React, { useState } from "react";
import "./MyStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import ContainersItem from "./ConversationsItem";

function Sidebar() {
  const [conversations, setConversations]=useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today"
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today"
    }
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
          <input placeholder="search" className="search-box" />
        </IconButton>
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation)=>{
          return <ContainersItem props={conversation} key={conversation.name}/>
        })}
        
      </div>
    </div>
  );
}

export default Sidebar;
