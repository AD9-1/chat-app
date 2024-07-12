import React, { useState } from "react";
import "./AddUser.css";
import { db } from "../../../lib/firebase";
import { collection, getDoc, query, where } from "firebase/firestore";

const AddUser = () => {
  const[user,setUser]=useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username } = Object.formEntries(formData);
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const quesrySnapShot=await getDoc(q);
if(!quesrySnapShot.empty)
  {

  }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="adduser">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="details">
          <img src="./avatar.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
