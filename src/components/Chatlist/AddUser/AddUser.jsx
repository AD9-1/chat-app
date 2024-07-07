import React from 'react'
import "./AddUser.css"
const AddUser = () => {
  return (
    <div className='adduser'>
      <form action="">
        <input type="text" placeholder='Username' name="username" />
        <button>Search</button>
      </form>
      <div className='user'>
        <div className='details'>
            <img src="./avatar.png" alt="" />
            <p>Jane Doe</p>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}

export default AddUser
