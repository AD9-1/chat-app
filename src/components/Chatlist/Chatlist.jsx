import React, { useEffect, useState } from "react";
import "./Chatlist.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddUser from "./AddUser/AddUser";
import { userstore } from "../../lib/userstore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  const [Chats, setChats] = useState([]);
  const { currentUser } = userstore();

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();
          return { ...item, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.upDatedAt - a.upDatedAt));
      }
    );
    return () => {
      unsub();
    };
  }, [currentUser.id]);

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
      <div>
        {Chats &&
          Chats.map((chat, index) => {
            <div className="item" key={index}>
              <img src="./avatar.png" alt="" />
              <div className="text">
                <span>Jane Doe</span>
                <h4>{chat.lastMessage}</h4>
              </div>
            </div>;
          })}
          
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default Chatlist;
