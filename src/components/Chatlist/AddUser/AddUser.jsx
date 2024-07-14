import React, { useState } from "react";
import "./AddUser.css";
import { db } from "../../../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { userstore } from "../../../lib/userstore";

const AddUser = () => {
  const [users, setUsers] = useState(null);
  const { currentUser } = userstore();




  const handleAdd = async (e) => {
    e.preventDefault();
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(chatRef, "userchats");
    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [], 
      });

      await updateDoc(doc(userChatsRef, users.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          receiverId: currentUser.id,
          upDatedAt: Date.now(),
          lastMessage: "",
        }),
      });
      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          receiverId: users.id,
          upDatedAt: Date.now(),
          lastMessage: "",
        }),
      });
      console.log(newChatRef.id);
    } catch (err) {
      console.log(err);
    }
  };



  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username } = Object.fromEntries(formData);
    // const username  = formData.get("username")

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);
      console.log(querySnapShot.docs[0].data());
      if (!querySnapShot.empty) {
        setUsers(querySnapShot.docs.map((doc) => doc.data()));
      }
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <div className="adduser">
      <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>

      {users &&
        users.map((user) => (
          <div className="user">
            <div className="details">
              <img src={user.avatar || "./avatar.png"} alt="" />
              <p>{user.username}</p>
            </div>
            <button onClick={handleAdd}>Add User</button>
          </div>
        ))}
    </div>
  );
};

export default AddUser;
