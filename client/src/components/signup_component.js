import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [mobile, setMno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [female, setFemale] = useState("");
  const [male, setMale] = useState("");

  const handleSubmit = (e) => {
     
      e.preventDefault();

      console.log(fname, mobile, email, password,confirm,female,male);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
           mobile,
            email, 
            password,
            confirm,
            female,
            male,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Mobile no</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile no"
              onChange={(e) => setMno(e.target.value)}
            />
          </div>

          

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-Enter password"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <br/>
            <input
              type="radio"
              name="FemaleType"
              value="Female"
              onChange={(e) => setFemale(e.target.value)}
            />
            Female<br/>
            <input
              type="radio"
              name="MaleType"
              value="Male"

              onChange={(e) => setMale(e.target.value)}
            />
            Male
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
