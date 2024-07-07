import React, { useState } from "react";
import "./Chatlist.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddUser from "./AddUser/AddUser";
const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <SearchIcon />
          <input type="text" />
        </div>
        {addMode ? (
          <RemoveCircleOutlineIcon
            style={{ fontSize: "35px" }}
            onClick={() => setAddMode((prev) => !prev)}
          />
        ) : (
          <AddCircleOutlineIcon
            style={{ fontSize: "35px" }}
            onClick={() => setAddMode((prev) => !prev)}
          />
        )}
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
        <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <h4>Hello</h4>
        </div>
      </div>
      {addMode&&<AddUser/>}
    </div>
  );
};

export default Chatlist;
