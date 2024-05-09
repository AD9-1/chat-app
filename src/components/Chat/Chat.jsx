import React, { useEffect, useRef, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState();
  const endRef = useRef(null);
  useEffect(() => {
    console.log(endRef)
    endRef.current.scrollIntoView({behavior:"smooth"});
  }, []);
  const handleClick = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
    setEmoji(false);
    console.log(text);
  };
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
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            {" "}
            <p>
              t looks like you're trying to handle a click event and update some
              text. However, there's a syntax error in your code. The setText
              function is not properly updating the text state. Here's the
              corrected version:
            </p>
            <h4>1 min ago</h4>
          </div>
        </div>

        <div className="message own">
          <div className="text">
            {" "}
            <p>
              t looks like you're trying to handle a click event and update some
              text. However, there's a syntax error in your code. The setText
              function is not properly updating the text state. You're using an
              arrow function but not returning anything from it. Here's the
              corrected version:
            </p>
            <h4>1 min ago</h4>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            {" "}
            <p>
              t looks like you're trying to handle a click event and update some
              text. However, there's a syntax error in your code. The setText
              function is not properly updating the text state. You're using an
              arrow function but not returning anything from it. Here's the
              corrected version:
            </p>
            <h4>1 min ago</h4>
          </div>
        </div>

        <div className="message own">
          <div className="text">
            <img src="download.jpg" alt="" />
            <p>
              t looks like you're trying to handle a click event and update some
              text. However, there's a syntax error in your code. The setText
              function is not properly updating the text state. You're using an
              arrow function but not returning anything from it. Here's the
              corrected version:
            </p>
            <h4>1 min ago</h4>
          </div>
          <div ref={endRef}></div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <InsertPhotoIcon style={{ fontSize: "20px" }} />
          <LinkedCameraIcon style={{ fontSize: "20px" }} />
          <MicIcon style={{ fontSize: "23px" }} />
        </div>
        <input
          type="text"
          placeholder="Type a text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <Face4OutlinedIcon
            style={{ fontSize: "20px", color: "yellow" }}
            onClick={() => setEmoji((prev) => !prev)}
          />
          <div className="picker">
            {" "}
            <EmojiPicker open={emoji} onEmojiClick={handleClick} />
          </div>
        </div>

        <button type="submit" className="sendbutton">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
