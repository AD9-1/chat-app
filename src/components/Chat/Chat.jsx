import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <LocalPhoneIcon style={{ fontSize: "25px" }} />
          <VideoCallIcon style={{ fontSize: "25px" }} />
          <InfoOutlinedIcon style={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <InsertPhotoIcon style={{ fontSize: "20px" }}/>
          <LinkedCameraIcon style={{ fontSize: "20px" }} />
          <MicIcon style={{ fontSize: "23px" }} />
        </div>
        <input type="text" placeholder="Type a text..." />
        <div className="emoji">
          <Face4OutlinedIcon style={{ fontSize: "20px" }}/>
        </div>
        <button type="submit" className="sendbutton">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
