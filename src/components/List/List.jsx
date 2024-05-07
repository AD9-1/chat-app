import React from "react";
import "./List.css";
import Chatlist from "../Chatlist/Chatlist";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EditNoteIcon from '@mui/icons-material/EditNote';
const List = () => {
  return (
    <div className="list">
      <div className="userInfo">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>John</h2>
        </div>
        <div className="icons">
          <MoreHorizIcon style={{ fontSize: "25px" }}/>
          <VideoCallIcon style={{ fontSize: "25px" }} />
          <EditNoteIcon style={{ fontSize: "27px" }} />
        </div>
      </div>
      <Chatlist />
    </div>
  );
};

export default List;
