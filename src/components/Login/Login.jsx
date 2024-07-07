import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { setDoc, doc } from "firebase/firestore";
import upload from "../../lib/upload";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);
      console.log("imgUrl", imgUrl);
      await setDoc(doc(db, "users", res.user.uid), {
        username: username,
        email: email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("Account Created! You can login now");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleAvatar = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item ">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input
            className="fields"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="fields"
            type="password"
            placeholder="password"
            name="password"
          />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="uploadfile">
            <label htmlFor="file">
              {avatar.file ? (
                <img src={avatar.url} className="imagefile" alt="" />
              ) : (
                <>Upload an Image</>
              )}
            </label>
            <input
              className="filetype"
              type="file"
              id="file"
              onChange={handleAvatar}
            />{" "}
          </div>
          <input
            className="fields"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="fields"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="fields"
            type="password"
            placeholder="password"
            name="password"
          />
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
