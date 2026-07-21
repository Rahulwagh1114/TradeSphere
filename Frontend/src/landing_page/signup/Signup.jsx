import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    pan: "",
    password: "",
  });

  let handelInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/signup",
        user
      );

      alert(res.data.message);

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <div className="container">
        <div className="row text-center mt-3" >
          <h4>Signup with TradeSphere</h4>
          <form method="POST" onSubmit={handleSubmit}>
            <input style={{ width: "40%", margin: "10px", marginTop: "10px" }} type="text" name="username" placeholder="Enter name" value={user.username} onChange={handelInput} /><br />
            <input style={{ width: "40%", margin: "10px" }} type="email" name="email" placeholder="example.com" value={user.email} onChange={handelInput} /><br />
            <input style={{ width: "40%", margin: "10px" }} type="Number" name="mobile" placeholder="+91 **********" value={user.mobile} onChange={handelInput} /><br />
            <input style={{ width: "40%", margin: "10px" }} type="text" name="pan" placeholder="PAN NO." value={user.pan} onChange={handelInput} /><br />
            <input style={{ width: "40%", margin: "10px" }} type="password" name="password" placeholder="Password" value={user.password} onChange={handelInput} /><br />
            <button style={{ width: "40%", margin: "10px" }} type="submit">SignUp</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Signup;